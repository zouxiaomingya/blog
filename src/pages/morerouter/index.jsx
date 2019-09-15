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
function MoreRouter({ location }) {
  const { pathname } = location
  return (
    <div>
      <Menu
        selectedKeys={[pathname]}
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
      <Route path={'/morerouter/:topicId'} component={Topic} />
      <Route
        exact
        path={'/morerouter/a'}
        component={AAA}
      />
      <Route
        exact
        path={'/morerouter/b'}
        component={BBB}
      />
      <Route
        exact
        path={'/morerouter'}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )
} 
// function Topic(props) {
//   const { match } = props;
//   console.log(props)
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );
// }

export default withRouter(MoreRouter);
