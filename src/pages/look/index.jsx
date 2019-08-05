import React, { Fragment } from 'react';
// import MonacoEditor from 'react-monaco-editor';
// import { code } from './code'
// console.log(code);
function Look() {
  const editorDidMount = (editor, monaco) => {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  const onChange = (newValue, e) => {
    console.log('onChange', newValue, e);
  }
  return (
    <Fragment>
      {/* <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      /> */}
      <div>111</div>
    </Fragment>

  )
}
export default Look;