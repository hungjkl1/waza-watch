import React from 'react';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import { Modal, Button, Form, Row, Table, Container } from 'react-bootstrap';

const CartModal = (props) => {

  // Thanh toán giỏ hàng
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
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Giá tiền</th>
                <th>Số lượng</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              {props.cartItems.map((item, index) =>
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price} VND</td>
                  <td>{item.quantity}</td>
                  <td>{item.quantity * item.price} VND</td>
                </tr>)}
            </tbody>
          </Table>
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