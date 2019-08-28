import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from "react-router-dom";

// const { SubMenu } = Menu;
const { Sider } = Layout;
function Side({ location, routerConfig }) {
  const { pathname } = location;
  console.log(routerConfig);
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        style={{ height: '100%', borderRight: 0 }}
      >
        {routerConfig.map((item) => (
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              <Icon type={item.icon} />
              {item.text}
          </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
}

export default withRouter(Side);