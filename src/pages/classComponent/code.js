export const code = `class Test extends Component{
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
            <div>setState是同步还是异步？</div>
        )
    }
}`