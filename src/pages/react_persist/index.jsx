import React, { Fragment } from 'react';
import Monaco from '../../common/Monaco'
import { code } from './code'
function EventDemo() {
  return (
    <Fragment>
      <p>React 事件系统一部分的 SyntheticEvent 包装器</p>
      <Monaco code={code} />
      <p>如上代码运行就会报错</p>
      <p>
        解决方案1：使用React event.persist()使用event.target以构建一个新的状态是一种常见的图案，
        并作出反应提供了一个解决方案event.persist()。调用event.persist()该事件会从池中删除合成事件，并允许异步保留对事件的引用。
      </p>
      <Monaco
        code={
`onChange(e) {
  e.persist();
  thi˝s.setState((prevState, props) => {
    return {
      username: e.target.value
    }
  })
}`}/>
      <p>
        解决方案2：缓存 event.target
        另一种解决方案是event.target在事件处理程序中缓存结果，并在setState()回调中引用此缓存值。
      </p>
      <Monaco
        code={
`onChange(e) {
  let inputValue = e.target.value;  // 缓存 of e.target.value
  this.setState((prevState, props) => {
    return {
        username: inputValue
    }
  })
}`}
      />
      <hr />
      <a href="https://www.duncanleung.com/blog/2017-08-14-fixing-react-warnings-synthetic-events-in-setstate/">详情地址</a>
    </Fragment>
  )
}

export default EventDemo;