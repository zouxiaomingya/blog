import React from 'react';
import { Layout } from 'antd';
import Head from './layout/Head.jsx';
import Side from './layout/Side.jsx';
import Contents from './layout/Contents.jsx';
function App() {
  return (
    <Layout>
      <Head />
      <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
        <Side />
        <Contents />
      </Layout>
    </Layout>
  )
}
export default App;