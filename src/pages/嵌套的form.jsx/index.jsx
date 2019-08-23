import React, { useState } from 'react';
import { Form, Input, Button, Icon } from 'antd';

const { Item: FormItem } = Form
function ComplexForm({ form }) {
  console.log('render');
  const { getFieldDecorator, validateFields } = form
  const [numArr, setNumArr] = useState([1,2]);
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };
  const getConfig = (k) => [
    // {
    //   label: '成员',
    //   id: `member[${k}]`,
    //   // initialValue: '1111',
    //   rules: [{ required: true, message: '请填写姓名' }],
    //   content: <Input />,
    // },
    {
      label: 'name',
      id: `name[${k}]`,
      rules: [{ required: true, message: '请填写️年龄' }],
      content: <Input />,
    },
    {
      label: 'age',
      id: `age[${k}]`,
      rules: [{ required: true, message: '请填写️年龄' }],
      content: <Input />,
    },
  ]
  const add = () => {
    setNumArr([...numArr, numArr.length])
  };

  const onDelete = (index) => {
    console.log(numArr);
    delete numArr[index]
    console.log(numArr);
    setNumArr([...numArr])
  }

  const onSubmit = () => {
    validateFields((err, value)=>{
      if(err) return;
      console.log(value);
    })
  }
  return (
    <Form>
      {
        numArr.map((item, index)=>{
          console.log(item);
          return item && getConfig(index).map(({ label, id, initialValue, rules, content }) => (
            <FormItem key={id} label={label} {...formItemLayout}>
              {getFieldDecorator(id, {
                initialValue,
                rules,
              })(content)}
              {
                numArr.length && (
                  <Button onClick={()=>{onDelete(index)}}>delete</Button>
                )
              }
            </FormItem>
          ))
        })
      }
      
      <Form.Item {...formItemLayoutWithOutLabel}>
        <Button type="dashed" onClick={add} style={{ width: '60%' }}>
          <Icon type="plus" /> Add field
          </Button>
      </Form.Item>
      <Form.Item {...formItemLayoutWithOutLabel}>
        <Button type="primary" onClick={onSubmit} style={{ width: '60%' }}>
          <Icon type="plus" /> submit
          </Button>
      </Form.Item>
    </Form>
  )
}

export default Form.create()(ComplexForm)