import React from "react";
import Header from "./index";
import { Tabs } from "antd";
import { connect } from "../../connect";

const { TabPane } = Tabs;
function AAA(props) {
  console.log(props, "props>>>>>>");
  const { _dispatch, _state } = props;
  function callback(key) {
    console.log(key);
  }
  return (
    <div>
      <div>aaaaa</div>

      <div>{JSON.stringify(_state)}</div>
      <button
        onClick={() => {
          _dispatch((state) => {
            state.globalState.userName = "嘿嘿嘿";
          });
        }}
      >
        点击改变当前的全局状态
      </button>
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
  );
}

export default connect()(AAA);
