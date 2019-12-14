import React, { useState, useEffect, useCallback } from "react";
import { Input } from "antd";
import Monaco from "../../common/Monaco";
import { code } from "./code";

const RenderOutInput = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      value={value}
      onChange={e => {
        setValue(e.target.value);
      }}
    />
  );
};

function App() {
  console.log(1);
  const [count, setCount] = useState(1);
  let name, setName, age, setAge;
  const handleAdd = () => {
    setCount(count + 1);
  };
  const RenderInput = useCallback(() => {
    const [value, setValue] = useState("");
    return (
      <Input
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
    );
  }, []);
  return (
    <div>
      函数调用{RenderInput()}
      组件调用
      <RenderInput/>
      函数外的函数调用{RenderOutInput()}
      函数内的函数调用
      <RenderOutInput />
      <Monaco code={code} />
      <p>姓名: {name}</p>
      <p>年龄: {age}</p>
      <button onClick={handleAdd}> count + 1 </button>
    </div>
  );
}
export default App;
