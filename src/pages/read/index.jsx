import React, { Fragment } from 'react';
import { Modal, Button} from 'antd';
import ModalWrap from './ModalWrap'
function Read() {
  return (
    <ModalWrap>
      {({ visible, onClose, onOpen }) => {
        return (
          <Fragment>
            <Button onClick={onOpen}>打开表单</Button>
            <Modal
              title="Basic Modal"
              visible={visible}
              // onOk={this.handleOk}
              onCancel={onClose}
            >
              <p>sdd</p>
            </Modal>
          </Fragment>
        )
      }}
    </ModalWrap>
  )
}
export default Read;