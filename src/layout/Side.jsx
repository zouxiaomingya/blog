import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from "react-router-dom";

// const { SubMenu } = Menu;
const { Sider } = Layout;
function Side({ location }) {
  const { pathname } = location;
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="/home">
          <Link to='/home'>
            <Icon type="laptop" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="/look">
          <Link to='/look'>
            <Icon type="laptop" />
            Look
          </Link>
        </Menu.Item>
        <Menu.Item key="/read">
          <Link to='/read'>
            <Icon type="laptop" />
            Read
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default withRouter(Side);