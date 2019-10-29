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
            </div>
        )
    }
}

export default Test;