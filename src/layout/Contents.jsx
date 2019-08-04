import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
function Contents() {
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Content
        style={{
          background: '#fff',
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        Content
      </Content>
    </Layout>
  )
}

export default Contents;