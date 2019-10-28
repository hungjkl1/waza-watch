import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class CartModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    }
  }
  componentDidMount() {
    const json = localStorage.getItem('cartItems');
    const cartItems = JSON.parse(json);

    if (cartItems) {
      this.setState(() => ({ cartItems }))
    }
  }

  handleClear = () => {
    localStorage.removeItem('cartItems');
    this.setState(() => ({ cartItems: [] }))
  }
  render() {
    console.log(this.props.cartItems.length);
    return (
      <Modal show={this.props.show} onHide={this.props.hide} >
        <Modal.Header>
          Giỏ hàng của bạn
        </Modal.Header>
        <Modal.Body>
          {this.props.cartItems.length === 0 &&
            <div>
              <p align='center'>Bạn chưa có sản phẩm nào</p>
            </div>
          }

          {this.props.cartItems.length > 0 &&
            <ul>
              {
                this.props.cartItems.map((item) =>
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
            <Button onClick={this.handleClear}>Thanh toán </Button>
          </div>
        </Modal.Footer>
      </Modal>
    )
  };
}
export default CartModal;