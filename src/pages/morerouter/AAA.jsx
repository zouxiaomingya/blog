import React from 'react';
import Header from './index';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
function AAA() {

  function callback(key) {
    console.log(key);
  }
  return (
    <div>
      <Header />
      <div>aaaaa</div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="选项1" key="1">
          第一个
        </TabPane>
        <TabPane tab="选项2" key="2">
          第2个
        </TabPane>
        <TabPane tab="选项3" key="3">
          第3个
        </TabPane>
      </Tabs>
    </div>
  )
}

export default AAA;