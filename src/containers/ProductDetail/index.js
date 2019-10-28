import React from 'react';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class ProductDetail extends React.Component {

  handleAddItemToCart = (e) => {
    e.preventDefault();
    const item = {
      name: e.target.name.value,
      quantity: e.target.quantity.value
    };

    this.props.addItem(item);

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
                <h2>Gia: 10,000 VND</h2>
                <p>Thong tin san pham</p>

                <div>
                  <Form onSubmit={this.handleAddItemToCart}>
                    <Form.Group>
                      <Form.Control hidden name='name' type='string' value={this.props.match.params.name} />
                      <Row>
                        <Col>
                          <Form.Label column >Số lượng </Form.Label>
                        </Col>
                        <Col>
                          <Form.Control name='quantity' type='number' defaultValue='1' />
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

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => { dispatch({ type: 'ADD_ITEM', item }) }
  }
}

export default connect(null, mapDispatchToProps)(ProductDetail);
