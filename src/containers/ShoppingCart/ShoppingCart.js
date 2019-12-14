import React, { Component } from 'react';
import Form from './Form';
import { Link } from '@reach/router';
import Swal from 'sweetalert2';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import _ from 'lodash';
import './style.scss';
import API from '../../core'
// components
import BillCreate from '../../components/BillCreateForm';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.service = new API()
    this.state = {
      detail: null
    }
  }
  formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  };

  getTotalPrice = () => {
    let totalPrice = 0;
    this.props.cartItems.map((item, index) => {
      totalPrice += Number(item.quantity) * Number(item.price);
    })
    return totalPrice;
  };

  getPaypalDetail = (detail) => {
    this.setState({
      detail
    })
  };
  
  renderForm = () => {
    const json = localStorage.getItem('user');
    const user = JSON.parse(json);

    return <Form user={user} getPaypalDetail={this.getPaypalDetail} handleSubmit={this.handleSubmit} handleOnChange={this.handleOnChange} />
  }

  handleSubmit = e => {
    e.preventDefault()

    // --- Gửi data lên server --- //
    let product = []
    this.props.cartItems.map(item => {
      product.push({ productId: item._id, price: item.price, quantity: item.quantity })
    })
    if (!this.props.user) {
      const nonUser = this.state
      const bill = {
        address: this.state.address,
        billDetail: product,
        nonUser,
        payment: this.state.detail
      }
      this.service.post('bill/createBill', { data: bill }).then(result => {
        Swal.fire({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 1500,
          type: "success",
          title: "Thanh toán thành công"
        });
      }).catch(err => {
        alert(err)
      })
    } else {
      const bill = {
        address: this.state.address,
        billDetail: product,
        user: this.props.user,
        isUser: true,
        payment: this.state.detail
      }
      this.service.post('bill/createBill', { data: bill }).then(result => {
        Swal.fire({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 1500,
          type: "success",
          title: "Thanh toán thành công"
        });
      }).catch(err => {
        alert(err)
      })
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCreateBill = (values) => {
    this.props.removeAllItems();
    console.log(values);
  };

  render() {
    return (
      <div className='component-shopping-cart'>
        <Container>

          {_.isEmpty(this.props.cartItems) &&
            <div className='empty-cart'>
              <div>
                <div>Bạn chưa có sản phẩm nào</div>
                <div>
                  Hãy đến trang <Link to='/products'>sản phẩm</Link> để chọn lựa sản phẩm nhé !
                </div>
              </div>
            </div>
          }

          {this.props.cartItems.length > 0 &&
            <Row>
              <Col md={8}>
                <Table >
                  <thead>
                    <tr>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Giá tiền</th>
                      <th>Số lượng</th>
                      <th>Tổng tiền</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.cartItems.map((item, index) =>
                      <tr key={index}>
                        <td><img src={item.productImage} width='50' /></td>
                        <td>{item.name}</td>
                        <td>{this.formatNumber(item.price)} VND</td>
                        <td>
                          <div className='quantity-container'>
                            <Button className='mr-2' variant="secondary" size='sm' disabled={item.quantity <= 1}
                              onClick={() => this.props.changeQuantity(item, item.quantity - 1)}> - </Button>
                            <div>{item.quantity}</div>
                            <Button className='ml-2' variant="secondary" size='sm' disabled={item.quantity >= 99}
                              onClick={() => this.props.changeQuantity(item, item.quantity + 1)}> + </Button>
                          </div>
                        </td>
                        <td>{this.formatNumber(item.quantity * item.price)} VND</td>
                        <td>
                          <Button variant="danger" size='sm'
                            onClick={() => this.props.remove(item)}> X
                          </Button>
                        </td>
                      </tr>)}
                  </tbody>
                </Table>
              </Col>

              <Col>
                <div className='total-price'>
                  <h2>Tổng số tiền</h2>
                  <h4>{this.formatNumber(this.getTotalPrice())} VND</h4>
                  
                  <hr />
                  <BillCreate onSubmit={this.handleCreateBill} user={this.props.user} />
                </div>
              </Col>
            </Row>
          }
        </Container>
      </div>
    );
  };
};

export default ShoppingCart;