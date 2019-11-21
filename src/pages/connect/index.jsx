import React, { Fragment } from 'react';
import { Select } from 'antd';
import Monaco from '../../common/Monaco';
import { code } from './code'
import { connect } from '../../connect'

const { Option } = Select;
function Show({ _state, _dispatch }) {
    const { userName } = _state;
    return (
        <Fragment>
            <h2 style={{ textAlign: 'center' }}>工程化导入模块</h2>
            <Select value={userName} defaultValue={userName} onChange={value => {
                _dispatch(state => {
                    console.log(value);
                    state.userName = value
                })
            }}>
                <Option value='xiaoming'>小明</Option>
                <Option value='xiaohong'>小红</Option>
            </Select>
            <span>
               用户名：{userName} 点击改变用户 ，其他组件也会变化
            </span>
            <Monaco code={code} />
            <div >{userName}</div>
            <hr />
        </Fragment>
    )
}
export default connect()(Show);