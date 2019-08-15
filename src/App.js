import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Head from './layout/Head.jsx';
import Side from './layout/Side.jsx';

import Home from './pages/home';
import Look from './pages/look';
import Read from './pages/read';
import Page404 from './pages/Page404';
import EventDemo from './pages/react_demo';

const { Content } = Layout;
function App() {
  const routerConfig = [
    {
      path: '/home',
      icon: 'laptop',
      text:'Home',
    }, {
      path: '/look',
      icon: 'laptop',
      text:'Look',
    }, {
      path: '/read',
      icon: 'laptop',
      text:'Read',
    }, {
      path: '/react',
      icon: 'laptop',
      text:'React的eventv报错',
    },
  ]
  return (
    <BrowserRouter>
      <Layout>
        <Head />
        <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
          <Side routerConfig={routerConfig}/>
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
                <Route exact path="/home" component={Home} />
                <Route exact path="/look" component={Look} />
                <Route exact path="/read" component={Read} />
                <Route exact path="/react" component={EventDemo} />
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