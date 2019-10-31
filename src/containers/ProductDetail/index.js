import React from 'react';
import Swal from 'sweetalert2';
import products from './products.json';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        id: '',
        name: ''
      }
    }

  }

  // NOTE: Gọi API lấy sản phẩm theo ID
  componentDidMount() {
    // FIXME:  Xóa khúc này 
    let currentProduct = products.find((item) =>{
      return item.id == this.props.match.params.id
    });
    
    console.log(currentProduct);

    this.setState(() => ({
      product: currentProduct
    }));
  }

  // --- Thêm sản phẩm vài giỏ hàng --- //
  handleAddItemToCart = (e) => {
    e.preventDefault();
    const item = {
      id: e.target.id.value,
      name: e.target.name.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value
    };

    // ACTION thêm sản phẩm
    this.props.dispatch({ type: 'ADD_ITEM', item })

    // --- Sweet alert --- //
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 1500
    })

    Toast.fire({
      type: 'success',
      title: 'Đã thêm vào giỏ hàng'
    })
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={8}>
              <img src='https://ysjournal.com/wp-content/uploads/2014/03/sample_overlay.gif' alt='product_img' />
            </Col>

            <Col md={4}>
              <div className='product-info-container'>
                <h1>{this.state.product.name}</h1>
                <h2>Gia: {this.state.product.price} VND</h2>
                <p>Thong tin san pham</p>

                <div>
                  <Form onSubmit={this.handleAddItemToCart}>
                    <Form.Group>
                      {/* Để tạo một item mới cho giở hàng */}
                      <Form.Control hidden name='id' type='string' value={this.state.product.id} />
                      <Form.Control hidden name='name' type='string' value={this.state.product.name} />
                      <Form.Control hidden name='price' type='number' value={this.state.product.price} />

                      <Row>
                        <Col>
                          <Form.Label column >Số lượng </Form.Label>
                        </Col>
                        <Col>
                          <Form.Control name='quantity' type='number' defaultValue='1' />
                        </Col>
                      </Row>
                    </Form.Group>

                    <Button type="submit" >Thêm vào giỏ hàng</Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div >
    )
  }
}

export default connect(null, null)(ProductDetail);
