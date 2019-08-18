import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Head from './layout/Head.jsx';
import Side from './layout/Side.jsx';

// 路由界面
import Home from './pages/home';
import Look from './pages/look';
import Read from './pages/read';
import Acticle from './pages/article'
import EventDemo from './pages/react_demo';

// 404 界面
import Page404 from './pages/Page404';

const { Content } = Layout;
function App() {
  const routerConfig = [
    {
      path: '/home',
      icon: 'laptop',
      text: 'Home',
      component: Home,
    }, {
      path: '/look',
      icon: 'laptop',
      text: 'Look',
      component: Look,
    }, {
      path: '/read',
      icon: 'laptop',
      text: 'Read',
      component: Read,
    }, {
      path: '/react',
      icon: 'laptop',
      text: 'React的eventv报错',
      component: EventDemo,
    }, {
      path: '/article',
      icon: 'laptop',
      text: '文章',
      component: Acticle,
    },
  ]
  return (
    <BrowserRouter>
      <Layout>
        <Head />
        <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
          <Side routerConfig={routerConfig} />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Redirect exact from='/' to='/home' />
                {routerConfig.map(({ path, component }) => (
                  <Route exact path={path} component={component} />
                ))}
                <Route component={Page404} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}
export default App;