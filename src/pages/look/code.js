export const code = `import React, { useState, useRef, useEffect } from 'react';
import './App.css';
function App() {
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
  return (
    <div className="App">
      <header className="App-header">
        当前的数：{count}
        <hr />
        上一个的数：{usePrevious(count)}
        <button onClick={handleAdd}>+1</button>

      </header>
    </div>
  );
}

export default App;
`