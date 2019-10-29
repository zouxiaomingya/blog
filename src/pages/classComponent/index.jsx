import React, { Component } from 'react';
import Monaco from '../../common/Monaco';
import { code } from './code'



class Test extends Component{
    constructor(props){
        super(props)
        this.state = {
            num: 1
        }
    }
    componentDidMount(){
        this.setState({num: this.state.num + 1})
        console.log(this.state.num)
        this.setState({num: this.state.num + 1})
        console.log(this.state.num)
        setTimeout(() => {
            this.setState({num: this.state.num + 1})
            console.log(this.state.num)
            this.setState({num: this.state.num + 1})
            console.log(this.state.num)
        }, 100)
    }
    render(){
        return (
            <div>
                <Monaco code={code} />
                <div>setState是同步还是异步？</div>
                <p>上面这样的一个例子他的打印是什么样的？</p>
                <p>答案可以打开控制台看到</p>
                <p>打印顺序为：1，1，3，4</p>
                <p>setState 通过一个队列机制来实现 state 更新，当执行 setState() 时，
                    会将需要更新的 state 浅合并后放入 状态队列，而不会立即更新 state，
                    队列机制可以高效的批量更新 state。而如果不通过setState，
                    直接修改this.state 的值，则不会放入状态队列，当下一次调用 setState 
                    对状态队列进行合并时，之前对 this.state 的修改将会被忽略，造成无法预知的错误。
                    React通过状态队列机制实现了 setState 的异步更新，避免重复的更新 state。
                </p>
                <a href="https://github.com/sisterAn/blog/issues/26">github 详细介绍地址</a>
            </div>
        )
    }
}

export default Test;