## **进阶使用**

首先，我们自己可以设想一下，假如要自己来实现代码补全以及错误提示，我们会怎么做？

第一，我们要解析输入的文本，这时，我们就需要写一个Parser。

第二，根据Parser解析的结果来调用monaco的标注接口来标注错误的代码从而实现错误提示功能

第三，根据Parser解析的结果信息，提供上下文相关的代码候选项来实现代码补全功能。

可以看出来，实现起来难度会很大，涉及到的点很多，不过，和语法高亮一样，monaco也帮助我们实现了这些功能，目前支持**html，css，ts/js，json**四种语言，我们只需要引入即可。但是这边的引入可没有语法高亮那么简单。

Monaco的实现采用worker的方式，因为语法解析需要耗费大量时间，所以用worker来异步处理返回结果比较高效。我们使用的话需要两步。

1. **提供一个定义worker路径的全局变量**

```
window.MonacoEnvironment = {
 getWorkerUrl: function (moduleId, label) {
  if (label === 'json') {
    return './json.worker.js';
 }
  if (label === 'css') {
   return './css.worker.js';
  }
  if (label === 'html') {
   return './html.worker.js';
  }
  if (label === 'typescript' || label === 'javascript') {
   return './typescript.worker.js';
  }
  if(label==="sql"){
   return "./sql.worker.js";
  }
  return './editor.worker.js';
  }
}
```

选择对应的language，monaco会去调用getWorkerUrl去查worker的路径，然后去加载。这边默认会加载一个editor.worker.js，这是一个基础功能文件，提供了所有语言通用的功能（例如已定义常量的代码补全提示），无论使用什么语言，monaco都会去加载他。

**2. 打包worker**

在webpack中引入需要的worker

```
 entry: {
      "main": path.resolve(process.cwd(), "src/main.js"),
      "editor.worker": 'monaco-editor/esm/vs/editor/editor.worker.js',
      "ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker',
    },
```

好了，这边开始就是monaco的地狱模式，我们会遇到非常多的问题。

**问题一.** 我们的输出一般是加hash的，所以，输出的worker文件也会有对应的hash值后缀，例如typescript.worker.a23sf4asfqw.js，那么，第一步中的getWorkerUrl中的配置(typescript.worker.js)就和他对不上了，导致查找worker路径失败。

**问题二.** worker是运行在单独的线程中的，所以没有window变量，我们需要修改webpack的全局变量为self才可以。

**问题3.** 假如使用html-webpack-plugin插件，我们就要防止worker被直接引入html文件（因为worker也是单独的entry），因此还需要设置html-webpack-plugin的chunks。

....

不得不说monaco是一个很贴心的编辑器，他也帮我们解决了这一系列问题。解决我们问题的就是**[monaco-editor-webpack-plugin](http://link.zhihu.com/?target=https%3A//github.com/Microsoft/monaco-editor-webpack-plugin)。**

## **[monaco-editor-webpack-plugin](http://link.zhihu.com/?target=https%3A//github.com/Microsoft/monaco-editor-webpack-plugin)**

使用起来也非常简单

```
npm install monaco-editor-webpack-plugin -S
```

**webpack配置**

```
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports=function(){
  return {
    ...
    plugins:[
      new MonacoWebpackPlugin()
    ]
    ...
  }
}
```

插件会帮我们做这么几件事

1. **自动注入getWorkerUrl全局变量**
2. **处理worker的编译配置**
3. **自动引入控件和语言包。**

具体要引入哪些控件和语言包，我们可以通过配置**languages**和**features**来控制

```
new MonacoWebpackPlugin({
 languages:["javascript","css","html","json"],
 features:["coreCommands","find"]
})
```

缺省情况下，插件的会引入**默认的语言包和控件**（瞄了一下，应该是所有的控件和语言包），具体可以查看这个地址[Microsoft/monaco-editor-webpack-plugin](http://link.zhihu.com/?target=https%3A//github.com/Microsoft/monaco-editor-webpack-plugin%23options)。

很好，现在我们以及完成了一个拥有自动补全，错误提示，以及语法高亮的编辑器。

## **事件绑定**

在完成了编辑器本身的配置之后，我们可以开始进行下一步，**绑定编辑事件**。

```
monacoInstance.onDidChangeModelContent((event) => {
 const newValue=monacoInstance.getValue();
 console.log(newValue)
})
```

**monacoInstance**是一个**create**方法返回的实例，他包含很多操作实例的方法。**event**是一个**IModelContentChangedEvent**对象，他包含了非常非常详细的变更信息，包括操作的类型（撤销、恢复，还是手动输入引发的文本变更），变更的文本位置，变更的文本内容等。而我们要获取最新的值，则需要调用

```
monacoInstance.getValue();
```

细心的朋友应该还会发现一个很奇怪的地方，那就是我们绑定的方法用的是**onDidChangeModelContent，**里面有一个**Model**，这命名可是很讲究的，字面意思就是**变更Model内容触发事件，**从头到尾，我们都没看到有Model的存在，那么为什么这边是变更Model内容触发事件呢，难道我们操作的是Model？

是的，其实我们在编辑的时候，就是在Model上编辑，默认情况下，monaco会帮我生成一个Model，我们可以调用**getModel**打印一下

```
monacoInstance.getModel()
```

![img](data:image/svg+xml;utf8,<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="680" height="1280"></svg>)

看一看api，我们可以发现，Model其实是一个保存编辑状态的对象，他里面含有语言信息，当前的编辑文本信息，标注信息等。所以我们可以缓存一下Model对象，在需要的时候直接调用**setModel**即可随时切换到之前的状态。或者也可以在初始化实例的时候设置一个Model。

```
const model=monaco.editor.createModel("hahahaha","javascript");
monacoInstance = monaco.editor.create(this.monacoDom.current, {
 model:model
})
```

而且我们可以直接在model上来绑定我们的事件

```
model.onDidChangeContent((event)=>{
...
})
```

Model最后也需要我们销毁，这里分两种情况，假如是通过**createModel**创建的Model，那么我们需要手动销毁，但是如果是monaco默认创建的，则不需要，在调用实例的销毁方法时，会顺带销毁默认创建的Model。

```
model.dispose();
```

除了编辑事件之外，Model还有许多其他事件

例如：

**onDidChangeOptions** 配置改变事件

**onDidChangeLanguage** 语言改变事件

...

在简单的场景下，Model的存在可能使得我们使用起来比较繁琐，但是，在复杂场景下，model可以极大的简化代码复杂性。

设想一下我们有5个tab，每个tab都是一个编辑器，每个编辑器都有各自的语言，内容和标注信息，如果没有Model，我们需要保存每个tab的语言，内容等信息，在切换到对应tab时再将这些信息初始化到编辑器上，但是利用Model，我们不需要额外去保存每个tab的编辑信息，只需要保存每个tab的Model，然后将Model传给编辑器进行初始化即可。

