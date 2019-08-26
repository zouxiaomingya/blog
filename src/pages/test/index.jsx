import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(1);
  let name, setName, age, setAge;
  if(count & 1){
    console.log('count为基数');
    [name, setName] = useState('kevin');
    [age, setAge] = useState(18);
  } else{
    console.log('count为偶数');
    [age, setAge] = useState(16);
    [name, setName] = useState('Don');
  }
  const handleAdd = () => {
    setCount(count+1)
  };
  return (
    <div>
      <p>姓名: {name}</p>
      <p>年龄: {age}</p>
      <button onClick={handleAdd}> count + 1 </button>
    </div>
  );
}
export default App;