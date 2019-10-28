import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
  };

  handleAddItemToCart(e) {
    e.preventDefault();
    const newItem = {
      name: e.target.name.value,
      quantity: e.target.quantity.value
    };

    const json = localStorage.getItem('cartItems');
    const cartItems = JSON.parse(json);
    
    if (cartItems) {
      const newCartItems = [...cartItems, newItem];
      const json = JSON.stringify(newCartItems);
      localStorage.setItem('cartItems', json)

    } else {
      const newCartItems = [newItem];
      const json = JSON.stringify(newCartItems);
      localStorage.setItem('cartItems', json)
    }
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
                <h2>Gia: 10,000 VND</h2>
                <p>Thong tin san pham</p>

                <div>
                  <Form onSubmit={this.handleAddItemToCart}>
                    <Form.Group>
                      <Form.Control hidden name='name' type='string' value={this.props.match.params.name} />
                      <Row>
                        <Col>
                          <Form.Label column sm="2">Số lượng </Form.Label>
                        </Col>
                        <Col>
                          <Form.Control name='quantity' type='number' />
                        </Col>
                      </Row>
                    </Form.Group>

                    <Button type="submit">Thêm vào giỏ hàng</Button>
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
export default ProductDetail;
