import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { PayPalButton } from "react-paypal-button-v2";

class FormDelivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.userForm = React.createRef();
  }

  submitForm=()=>{
    alert('danger')
    this.userForm.current.dispatchEvent(new Event('submit', { cancelable: true }))
  }

  render() {

    return (
      <div>
        <hr />

        {/* Khi người dùng đã đăng nhập */}
        {this.props.user &&
          <Form onSubmit={this.props.handleSubmit} ref={this.userForm}>
            <Form.Group>
              <Form.Label>Địa chỉ giao hàng</Form.Label>
              <Form.Control onChange={this.props.handleOnChange} name='address' type="string" />
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.Label>Mã giảm giá</Form.Label>
              <Form.Control type="string" />
            </Form.Group>
            <Button className='btn-primary btn-block mt-3' variant="primary" type="submit">Thanh toán tiền mặt</Button>
            <PayPalButton
            amount="0.01"
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              this.props.getPaypalDetail(details)
              this.submitForm()
            }}
            options={{
              clientId: "PRODUCTION_CLIENT_ID"
            }}
          />
          </Form>
        }

        {/* Khi người dùng chưa đăng nhập */}
        {!this.props.user &&
          <Form onSubmit={this.props.handleSubmit}>
            <Form.Group>
              <Form.Label>Họ tên</Form.Label>
              <Form.Control onChange={this.props.handleOnChange} name='name' type="string" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Địa chỉ giao hàng</Form.Label>
              <Form.Control onChange={this.props.handleOnChange} name='address' type="string" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control onChange={this.props.handleOnChange} name='phone' type="number" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={this.props.handleOnChange} name='email' type="email" />
            </Form.Group>

            <hr />
            <Form.Group>
              <Form.Label>Mã giảm giá</Form.Label>
              <Form.Control type="string" />
            </Form.Group>
            
            <Button className='btn-secondary' variant="primary" type="submit">Thanh toán</Button>
            <PayPalButton
              amount="0.01"
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                this.props.getPaypalDetail(details)
              }}
              options={{
                clientId: "PRODUCTION_CLIENT_ID"
              }}
            />
          </Form>
        }
      </div>
    )
  };
}
export default FormDelivery;
