import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ProductDetail = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            <img src='https://ysjournal.com/wp-content/uploads/2014/03/sample_overlay.gif' alt='product_img'/>
          </Col>

          <Col md={4}>
            <div className='product-info-container'>
              <h1>{props.match.params.name}</h1>
              <hr />
              <h2>Gia: 10,000 VND</h2>
              <p>Thong tin san pham</p>
              <div>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      Số lượng
                    </Form.Label>
                    <Col>
                      <Form.Control class='' />
                    </Col>
                  </Form.Group>
                  <Button type="submit">Mua vào giỏ hàng</Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default ProductDetail;
