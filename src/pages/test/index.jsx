import React, { useState, useEffect } from 'react';
import Monaco from '../../common/Monaco';
import { code } from './code'

function App() {
  const [count, setCount] = useState(1);
  let name, setName, age, setAge;
  const handleAdd = () => {
    setCount(count + 1)
  };
  return (
    <div>
      <Monaco code={code} />
      <p>姓名: {name}</p>
      <p>年龄: {age}</p>
      <button onClick={handleAdd}> count + 1 </button>
    </div>
  );
}
export default App;