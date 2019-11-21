import React from "react";
import { Layout } from "antd";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Head from "./layout/Head.jsx";
import Side from "./layout/Side.jsx";
import Page404 from "./pages/Page404";
import { routerConfig } from "./Router";
const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Head />
        <Layout style={{ minHeight: "calc(100vh - 64px)" }}>
          <Side routerConfig={routerConfig} />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <Switch>
                {routerConfig.map(({ path, component }) => (
                  <Route key={path} path={path} component={component} />
                ))}
                <Redirect exact from='/' to='/home' />
                <Route component={Page404} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
