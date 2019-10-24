import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from './products.json';
import './productList.scss';

const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const ProductList = () => {
  return (
    <div className='productlist-component'>
      <Container>
        <Row>
          {
            products.map((item) => {
              return (
                <Col xs={6} sm={6} md={3}>
                  <Link to={'/products/' + item.name} className='link-product'>
                    <div className='product-container'>
                      <img className='product-container__image' src={item.img} alt={item.name} />
                      <p>{item.name}</p>
                      <p>{formatNumber(item.price)} VND</p>
                    </div>
                  </Link>
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