import React, { useState, useEffect, useRef } from 'react';
import { } from 'react';

function UseApi() {
  const [num, setNum] = useState(0);

  const pre = useRef(num);

  useEffect(() => {
    pre.current = num;
  }, [num]);
  
  const add = () => {
    setNum(num + 1)
  }
  return (
    <div>
      <div>{num}</div>
      <div>{pre.current}</div>
      <button onClick={add} >+1</button>
    </div>
  )
}

export default UseApi;