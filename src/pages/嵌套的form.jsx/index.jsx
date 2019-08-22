import React from 'react';
import { Form, Input } from 'antd';

const { Item: FormItem } = Form
function ComplexForm({ form }) {
  const { getFieldDecorator } = form
  console.log();
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
  const config = [
    {
      label: '姓名',
      id: 'name',
      initialValue: '1111',
      rules: [{ required: true, message: '请填写姓名' }],
      content: <Input />,
    },
    {
      label: '年龄',
      id: 'age',
      rules: [{ required: true, message: '请填写️年龄' }],
      content: <Input />,
    }
  ]
  return (
    <Form>
      {
        config.map(({ label, id, initialValue, rules, content }) => (
          <FormItem key={id} label={label} {...formItemLayout}>
            {getFieldDecorator(id, {
              initialValue,
              rules,
            })(content)}
          </FormItem>
        ))
      }
    </Form>
  )
}

export default Form.create()(ComplexForm)