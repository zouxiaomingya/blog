import React, { Fragment}  from 'react';
import Monaco from '../../common/Monaco';
import { code } from './code'

function Show() {
  return (
    <Fragment>
      <h2 style={{textAlign:'center'}}>工程化导入模块</h2>
      <Monaco code={code} />
      <hr />
    </Fragment>
  )
}
export default Show;