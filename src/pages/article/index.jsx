import React, { Fragment, useRef, useEffect, useState, lazy, Suspense} from 'react';
import { Button } from 'antd';
import Monaco from '../../common/Monaco';
import { code } from './code'

// const Monaco = lazy(() => import('../../common/Monaco'))
function Article() {
  
  return (
    <Fragment>
      <h2 style={{textAlign:'center'}}>flex 布局下多行对齐方式，让最后对出的一样实现左对齐</h2>
      <Monaco code={code} />
    </Fragment>
  )
}
export default Article;