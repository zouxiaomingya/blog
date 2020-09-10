### 安包
> 使用 yarn 来安装
### 项目技术
> react + antd + react-router 

### 状态管理
> 通过 hooks 来管理自己模块的状态。
> 全局状态可以使用 dva 来提高到全局

### 使用 monaco 来完成代码的展示。
```javaScript
  import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
  import * as languageObj from 'monaco-editor/min/vs/basic-languages/typescript/typescript';
  monaco.languages.register({ id: 'typescript' })
  monaco.languages.setMonarchTokensProvider('typescript',languageObj.language)
```

> 通过 monaco.languages 来选择语法的高亮

> 'monaco-editor/min/vs/basic-languages 有符合 js 语法高亮的保留字，关键字等；