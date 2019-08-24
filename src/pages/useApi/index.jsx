import React, { useState, useEffect, useCallback, Fragment, useReducer } from 'react';
import { Button, Input } from 'antd';

function UseApi() {
  const [num, setNum] = useState(0);


  const initailValue = {
    name: '',
    age: '',
  }

  const reduce = (state, { type, payload }) => {
    console.log(type);
    console.log(payload);
    // return 1
    switch (type) {
      case 'rest':
        return initailValue;
      default:
        return {
          ...state,
          ...payload
        }
    }
  }

  const [_state, _dispatch] = useReducer(reduce, initailValue)
  const { name, age } = _state;

  const onChangeInput = (key, value) => {
    _dispatch({
      type: 'change',
      payload: {
        [key]: value
      }
    })
  }
  const add = () => {
    setNum(num + 1);
  }
  return (
    <Fragment>
      <div>{num}</div>
      <span>name</span>
      <Input value={name} onChange={(e) => {
        onChangeInput('name', e.target.value);
      }} />
      <span>age</span>
      <Input value={age} onChange={(e) => {
        onChangeInput('age', e.target.value);
      }} />
      <Button onClick={()=>{_dispatch({type:'rest'})}}>Rest</Button>
      <Button onClick={add}>dianji</Button>
    </Fragment>
  )
}

export default UseApi;