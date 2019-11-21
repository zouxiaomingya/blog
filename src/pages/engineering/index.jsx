import React, { Fragment } from 'react';
import Monaco from '../../common/Monaco';
import { code } from './code'
import { connect } from '../../connect'
function Show({ _state, _dispatch }) {
  const { userName } = _state;
  return (
    <Fragment>
      <h2 style={{ textAlign: 'center' }}>工程化导入模块</h2>
      <Monaco code={code} />
      <div onClick={() => {
        _dispatch(state => {
          state.userName = 'xiaoming'
        })
      }}>{userName}</div>
      <hr />
    </Fragment>
  )
}
export default connect()(Show);