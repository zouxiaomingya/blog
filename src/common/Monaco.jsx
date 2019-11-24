import React, { useRef, useEffect, memo} from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import * as languageObj from 'monaco-editor/min/vs/basic-languages/typescript/typescript';
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';
monaco.languages.register({ id: 'typescript' })
monaco.languages.setMonarchTokensProvider('typescript',languageObj.language)
function Monaco({ code }) {
  // 获取行数
  const rowNum = code.split(/\r\n|\r|\n/).length
  
  const monacoRef = useRef(null)
  const monacoInstance = useRef(null)
  useEffect(() => {
    monacoInstance.current = monaco.editor.create(monacoRef.current, {
      value: code,
      language: "typescript",
      automaticLayout: true, // 自适应
      theme: 'vs', // 编辑主题
      // original='//safdafcode1',
    })
    return () => {
      monacoInstance.current.dispose();//使用完成销毁实例
    }
  })
  return (
    <div id="monaco" ref={monacoRef} style={{ margin: '0 20px', minHeight: 18*rowNum }} />
  )
}
export default memo(Monaco);