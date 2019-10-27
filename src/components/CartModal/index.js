import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CartModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.hide} >
      <Modal.Header>
        Giỏ hàng của bạn
      </Modal.Header>
      <Modal.Body>
        Giỏ hàng của bạn hiện đang trống
      </Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  )
}
export default CartModal;