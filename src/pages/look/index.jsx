import React, { Fragment, useRef, useEffect, useState, lazy, Suspense} from 'react';
import { Button } from 'antd';
import Monaco from '../../common/Monaco';
import { code } from './code'

// const Monaco = lazy(() => import('../../common/Monaco'))
function Look() {
  const [tempCode, setCode ] = useState('dom')
  const [count, setCount] = useState(0)
  const usePrevious = (state) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = state;
    })
    return ref.current;
  }
  const handleAdd = () => {
    setCount(state => ++state)
  }
  const handleAddCode = () => {
    setCode(tempCode + '\n' + 'Dom')
  }
  return (
    <Fragment>
      {/* <Suspense fallback={<div>loading...</div>}> 
        <Monaco code={code} />
      </Suspense> */}
      <Monaco code={code} />
      <hr />
      <Monaco code={tempCode} />
      <div className="App">
        <header className="App-header">
          <p>当前的数：{count}</p>
          <p>上一个的数：{usePrevious(count)}</p>
          <Button onClick={handleAdd}>+1</Button>
          <Button onClick={handleAddCode}>增加代码</Button>
        </header>
      </div>
    </Fragment>
  )
}
export default Look;