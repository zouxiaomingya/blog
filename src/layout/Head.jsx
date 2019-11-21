import React from 'react';
import { Layout, Icon, Select } from 'antd';
import { connect } from '../connect'

const { Header } = Layout;
const { Option } = Select

function Head({ _state, _dispatch }) {
  const { userName } = _state;
  return (
    <Header className="header" style={{ color: '#fff' }}>
      <div className="logo" >
        <Icon type="fire" />
        <Select value={userName} defaultValue={userName} onChange={(value) => {
          _dispatch(state => {
            state.userName = value
          })
        }}>
          <Option value='xiaoming'>小明</Option>
          <Option value='xiaohong'>小红</Option>
        </Select>
      </div>
    </Header>
  )
}

export default connect()(Head);