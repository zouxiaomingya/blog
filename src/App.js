import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Head from './layout/Head.jsx';
import Side from './layout/Side.jsx';

// 404 界面
import Page404 from './pages/Page404';

import { routerConfig } from './Router'
import AAA from './pages/morerouter/AAA'
import BBB from './pages/morerouter/BBB'
const { Content } = Layout;

const routerConfig1 = [
  {
    path: "/morerouter/a",
    text: 'AA',
    component: AAA,
  },
  {
    path: "/morerouter/b",
    text: 'BB',
    component: BBB,

  },
]
function App() {
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
                <Redirect exact from='/morerouter' to='/morerouter/a' />
                {routerConfig.map(({ path, component }) => (
                  <Route exact key={path} path={path} component={component} />
                ))}
                {routerConfig1.map(({ path, component }) => (
                  <Route exact key={path} path={path} component={component} />
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