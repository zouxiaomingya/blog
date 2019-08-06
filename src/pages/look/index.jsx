import React, { Fragment, useRef, useEffect, useState } from 'react';
import { Button } from 'antd';
// import MonacoEditor from 'react-monaco-editor';
import { code } from './code'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
function Look() {
  const monacoRef = useRef(null)
  const monacoInstance = useRef(null)
  useEffect(() => {
    monacoInstance.current = monaco.editor.create(monacoRef.current, {
      value: code,
      language: "java",
      automaticLayout: true, // 自适应
      theme: 'vs', // 编辑主题
      // original='//safdafcode1',
    })
    console.log(monacoInstance);
    return () => {
      monacoInstance.current.dispose();//使用完成销毁实例
    }
  })
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
    <Fragment>
      <div id="monaco" ref={monacoRef} style={{ margin: '0 20px', height: 400 }} />
      <div className="App">
        <header className="App-header">
          <p>当前的数：{count}</p>
          <p>上一个的数：{usePrevious(count)}</p>
          <Button onClick={handleAdd}>+1</Button>
        </header>
      </div>
    </Fragment>
  )
}
export default Look;