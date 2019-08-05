import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom";

// const { SubMenu } = Menu;
const { Sider } = Layout;
function Side() {
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Link to='/home'>
            <Icon type="laptop" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to='/look'>
            <Icon type="laptop" />
            Look
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to='/read'>
            <Icon type="laptop" />
            Read
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Side;