export const code = `function EventDemo() {
  const [data, setData] = useState({
    name: 'Dom',
    age: 18,
  })
  return (
    <Fragment>
      姓名<div>{data.name}</div>
      年龄<div>{data.age}</div>
      输入年龄
      <Input onChange={(e)=>{setData((state)=>{
        return {
          ...state,
          age:e.target.value,
        }
      })}} />
    </Fragment>

  )
}`