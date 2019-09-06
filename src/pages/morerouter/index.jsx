import React from 'react';
import { Menu } from 'antd';
import { withRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import AAA from './AAA';
import BBB from './BBB';

const routerConfig = [
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
function MoreRouter(props) {
  return (
    <div>
      <Menu
        mode="horizontal"
      >
        {routerConfig.map((item) => (
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              {item.text}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
     
    </div>
  )
}

export default withRouter(MoreRouter);
