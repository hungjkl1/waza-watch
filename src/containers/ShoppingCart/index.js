import React, { Component } from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import './shoppingcart.scss';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }
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

    return <Form user={user} />
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
                        <td><img src={item.img} width='30' /></td>
                        <td>{item.name}</td>
                        <td>{item.price} VND</td>
                        <td>{item.quantity}</td>
                        <td>{item.quantity * item.price} VND</td>
                        <td><Button variant="danger" size='sm' onClick={() => this.handleRemoveItem(item)}>X</Button></td>
                      </tr>)}
                  </tbody>
                </Table>
              </Col>
              <Col>
                <div className='total-price'>
                  <h2>Tổng số tiền</h2>
                  <h4>{this.getTotalPrice()} VND</h4>

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