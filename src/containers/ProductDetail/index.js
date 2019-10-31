import React from 'react';
import Swal from 'sweetalert2';
import products from './products.json';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './productdetail.scss';
class ProductDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: { id: '', name: '' },
      quantity: 1
    };
  };

  // NOTE: Gọi API lấy sản phẩm theo ID
  componentDidMount() {
    // FIXME:  Xóa khúc này 
    let currentProduct = products.find((item) => {
      return item.id == this.props.match.params.id
    });

    this.setState(() => ({
      product: currentProduct
    }));
  }

  handleChange = (e) => {
    this.setState({ quantity: e.target.value });
  }

  // --- Thêm sản phẩm vài giỏ hàng --- //
  handleAddItemToCart = (e) => {
    e.preventDefault();
    console.log(this.state.quantity)
    // ACTION thêm sản phẩm
    this.props.dispatch({
      type: 'ADD_ITEM',
      item: this.state.product,
      quantity: this.state.quantity
    })

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
              <img className='product-image'
                src={this.state.product.img}
                alt='product_img' />
            </Col>

            <Col md={4}>
              <div className='product-info-container'>
                <h1>{this.state.product.name}</h1>
                <h2>Gia: {this.state.product.price} VND</h2>
                <p>Thong tin san pham:</p>

                <div>
                  <Form onSubmit={this.handleAddItemToCart}>
                    <Form.Group>
                      <Row>
                        <Col>
                          <Form.Label column >Số lượng </Form.Label>
                        </Col>
                        <Col>

                          <Form.Control name='quantity' type='number' defaultValue='1'
                            value={this.state.value} onChange={this.handleChange} />

                        </Col>
                      </Row>
                    </Form.Group>

                    <Button variant='secondary' type="submit" >Thêm vào giỏ hàng</Button>
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
