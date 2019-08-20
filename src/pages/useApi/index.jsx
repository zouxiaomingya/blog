import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { Button } from 'antd';

console.log(useCallback);
function UseApi() {
  const [num, setNum] = useState(0);
  console.log(num);
  const add = () => {
    console.log(111);
    setNum(num+1);
  }
  return (
    <Fragment>
      <div>{num}</div>
      <Button onClick={add}>dianji</Button>
    </Fragment>
  )
}

export default UseApi;