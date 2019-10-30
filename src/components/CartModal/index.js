import React from 'react';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import { Modal, Button, Form, Row, Col, Container } from 'react-bootstrap';

const CartModal = (props) => {

  // Clear all item in cart
  const handleClearCart = () => {
    props.hide();
    props.dispatch({ type: 'CLEAR_ITEM' })

    Swal.fire({
      toast: true,
      position: 'top',
      type: 'success',
      title: 'Thanh toán thành công',
      timer: 1000,
      showConfirmButton: false,
    });
  }

  return (
    <Modal show={props.show} onHide={props.hide} >
      <Modal.Header>
        Giỏ hàng của bạn
        </Modal.Header>
      <Modal.Body>
        {props.cartItems.length === 0 &&
          <div>
            <p align='center'>Bạn chưa có sản phẩm nào</p>
          </div>
        }

        {props.cartItems.length > 0 &&
          <ul>
            {
              props.cartItems.map((item) =>
                <li>
                  <p>{item.name}: {item.quantity}</p>
                </li>
              )
            }
          </ul>
        }
        <Container>
          <Row>
            <Button onClick={handleClearCart}>Thanh toán </Button>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems
  };
};

export default connect(mapStateToProps)(CartModal);