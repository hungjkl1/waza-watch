import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';

const CartModal = (props) => {

  const wao = () => {
    props.dispatch({type: 'ADD_ITEM'})
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
                  <p>{item.name}</p>
                </li>
              )
            }
          </ul>
        }

      </Modal.Body>
      <Modal.Footer>
        <div>
          <Button>Thanh toán </Button>
          <Button onClick={wao}>wao </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems
  };
};

export default connect(mapStateToProps)(CartModal);