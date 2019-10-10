import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import products from './products.json';
import './productList.scss';

const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const ProductList = () => {
  return (
    <div>
      <Container>
        <Row>
          {
            products.map((item) => {
              return (
                <Col xs={6} sm={6} md={3}>
                  <div className='product-container'>
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                    <p>{formatNumber(item.price)} VND</p>
                  </div>
                </Col>
              )
            })
          }

        </Row>
      </Container>
    </div>
  )
}
export default ProductList;