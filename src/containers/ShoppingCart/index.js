import React, { Component } from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import './shoppingcart.scss';
import API from '../../core'

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.service = new API()
    this.state = {}
  }
  formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  getTotalPrice = () => {
    let totalPrice = 0;
    this.props.cartItems.map((item, index) => {
      totalPrice += Number(item.quantity) * Number(item.price);
    })
    return totalPrice;
  }
  handleRemoveItem = (item) => {
    this.props.dispatch({ type: 'REMOVE_ITEM', item })
  }

  renderForm = () => {
    const json = localStorage.getItem('user');
    const user = JSON.parse(json);

    return <Form user={user} handleSubmit={this.handleSubmit} handleOnChange={this.handleOnChange} />
  }

  handleSubmit = e => {
    e.preventDefault()

    

    // --- Gửi data lên server --- //
    let product = []
    this.props.cartItems.map(item => {
      product.push({ productId: item._id, price: item.price, quantity: item.quantity })
    })
    const nonUser = this.state
    const bill = {
      address: this.state.address,
      billDetail: product,
      nonUser
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

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changeQuantity = (item, quantity) => {
    this.props.dispatch({
      type: 'CHANGE_ITEM_QUANTITY',
      item, quantity
    })
  }
  render() {
    return (
      <div className='component-shopping-cart'>
        <Container>

          {this.props.cartItems.length === 0 &&
            <div>
              <p align='center'>Bạn chưa có sản phẩm nào</p>
              <p align='center'>
                Hãy đến trang <Link to='/products'>sản phẩm</Link> để chọn lựa sản phẩm nhé !
              </p>
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
                          <div>
                            <Button className='mr-2' variant="secondary" size='sm'
                              onClick={() => this.changeQuantity(item, item.quantity - 1)}> - </Button>
                            {item.quantity}
                            <Button className='ml-2' variant="secondary" size='sm'
                              onClick={() => this.changeQuantity(item, item.quantity + 1)}> + </Button>
                          </div>
                        </td>
                        <td>{this.formatNumber(item.quantity * item.price)} VND</td>
                        <td><Button variant="danger" size='sm' onClick={() => this.handleRemoveItem(item)}>X</Button></td>
                      </tr>)}
                  </tbody>
                </Table>
              </Col>
              <Col>
                <div className='total-price'>
                  <h2>Tổng số tiền</h2>
                  <h4>{this.formatNumber(this.getTotalPrice())}  VND</h4>

                  {this.renderForm()}


                </div>
              </Col>
            </Row>
          }
        </Container>
      </div >
    );
  };
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    user: state.user
  };
};

export default connect(mapStateToProps, null)(ShoppingCart);