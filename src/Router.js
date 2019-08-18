// 路由界面
// import Home from './pages/home';
// import Look from './pages/look';
// import Read from './pages/read';
// import Acticle from './pages/article'
// import EventDemo from './pages/react_demo';

const requireContext = require.context('./pages', true, /^\.\/.*\/index\.jsx$/)
let config = [];
const requireArr = requireContext.keys()
requireArr.forEach((key, index) => {
  const path = key.split('/')[1]
  const model = requireContext(key)
  config[index] = {
    path: `/${path}`,
    icon: 'laptop',
    text: path,
    component: model.default,
  }
})
export const routerConfig = config;

// export const routerConfig = [
//   {
//     path: '/home',
//     icon: 'laptop',
//     text: 'Home',
//     component: Home,
//   }, {
//     path: '/look',
//     icon: 'laptop',
//     text: 'Look',
//     component: Look,
//   }, {
//     path: '/read',
//     icon: 'laptop',
//     text: 'Read',
//     component: Read,
//   }, {
//     path: '/react',
//     icon: 'laptop',
//     text: 'React的eventv报错',
//     component: EventDemo,
//   }, {
//     path: '/article',
//     icon: 'laptop',
//     text: '文章',
//     component: Acticle,
//   },
// ]

