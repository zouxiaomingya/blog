import React from 'react';
import { Layout, Icon } from 'antd';
const { Header } = Layout;
function Head() {
  return (
    <Header className="header" style={{ color: '#fff' }}>
      <div className="logo" >
        <Icon type="fire" />
      </div>
    </Header>
  )
}

export default Head;