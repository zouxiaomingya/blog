import React, { Fragment, Component } from 'react';
import { Modal, Button } from 'antd';
import ModalWrap from './ModalWrap';

class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
    this.add = this.add.bind(this);
  }
  componentDidMount() {
    for (let i = 0; i < 20000; i++) {
      // setTimeout(() => {
      //   this.add()
      // }, 0.1 * i)
    }
  }
  add() {
    this.setState({ num: this.state.num + 1 }, (...rest) => {
      console.log(this.state.num, '<<<');
    });
    // var time = new Date().getTime()
    // while( new Date().getTime() - time < 1000){
    //   console.log(11)
    // }
    // console.log(this.state.num);
    // this.setState({num:this.state.num + 1},  (...rest) => {
    //   console.log(this.state.num, '<<<<');
    // });
    // console.log(this.state.num);
  }
  render() {
    return (
      <div>
        <div>{this.state.num}</div>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}
// function Read() {
//   return (
//     <ModalWrap>
//       {({ visible, onClose, onOpen }) => {
//         return (
//           <Fragment>
//             <Button onClick={onOpen}>打开表单</Button>
//             <Modal
//               title="Basic Modal"
//               visible={visible}
//               // onOk={this.handleOk}
//               onCancel={onClose}
//             >
//               <p>sdd</p>
//             </Modal>
//           </Fragment>
//         )
//       }}
//     </ModalWrap>
//   )
// }
export default Read;