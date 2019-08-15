import { useState } from 'react';
function ModalWrap({ children }) {
  const [visible, setVisible] = useState(false);
  const onOpen = () => setVisible(true);
  const onClose = () => setVisible(false);
  return children({ visible, onClose, onOpen })
}
export default ModalWrap;