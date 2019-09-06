// 路由界面
// import Home from './pages/home';
// import Look from './pages/look';
// import Read from './pages/read';
// import Acticle from './pages/article'
// import EventDemo from './pages/react_demo';

export const myRouterConfig = [
  {
    path: '/home',
    icon: 'laptop',
    text: 'Home',
  }, {
    path: '/look',
    icon: 'laptop',
    text: 'Look',
  }, {
    path: '/read',
    icon: 'laptop',
    text: 'Read',
  }, {
    path: '/article',
    icon: 'laptop',
    text: '文章',
  },
  {
    path: '/useApi',
    icon: 'laptop',
    text: 'useApi',
  },
  {
    path: '/react_persist',
    icon: 'laptop',
    text: 'react合成event',
  },
  {
    path: '/engineering',
    icon: 'laptop',
    text: '工程化',
  },
  {
    path: '/dynamicForm',
    icon: 'laptop',
    text: '动态表单',
  },
  {
    path: '/test',
    icon: 'laptop',
    text: '测试',
  },
  {
    path: '/morerouter',
    icon: 'laptop',
    text: '多级路由',
  },
]
const requireContext = require.context('./pages', true, /^\.\/.*\/index\.jsx$/)
let config = [];
const requireArr = requireContext.keys()
requireArr.forEach((_key, index) => {
  // const path = key.split('/')[1]
  let myPath;
  let myPathText;
  try {
    myPath = myRouterConfig[index].path
    myPathText = myRouterConfig[index].text
  } catch (error) {
    throw new Error('pages 下的文件为了设置路由')
  }
  // 通过 自己配置的 path 去匹配 requireArr 的 key；
  const key = requireArr.find(item => item.indexOf(myPath) !== -1)
  // 根据 key 去获取组件
  const model = requireContext(key)
  config[index] = {
    // path: `/${myPath}`,
    path: myPath,
    icon: 'laptop',
    text: myPathText,
    component: model.default,
  }
})
export const routerConfig = config;


