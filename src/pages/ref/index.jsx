import React, { useState, useRef } from "react";
import { Input } from "antd";
import { useEffect } from "react";

const MyInput = (props) => {
  const [value, setValue] = useState("");
  return (
    <Input
      value={value}
      ref={props.inputRef}
      onChange={e => {
        setValue(e.target.value);
      }}
    />
  );
};

function App() {
  let ref = null;
  console.log(ref, '>>>');

  useEffect(() => {
    console.log(ref, '>>>');
  }, [ref])
  return (
    <MyInput inputRef={ele => ref = ele} />
  );
}
export default App;
