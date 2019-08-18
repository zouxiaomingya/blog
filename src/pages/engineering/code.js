const a = '`/${path}`'
export const code = `const requireContext = require.context('./pages', true, /^\.\/.*\/index\.jsx$/)
let config = [];
const requireArr = requireContext.keys()
requireArr.forEach((key, index) => {
  const path = key.split('/')[1]
  const model = requireContext(key)
  config[index] = {
    path:${a},
    icon: 'laptop',
    text: path,
    component: model.default,
  }
})
export const routerConfig = config;`