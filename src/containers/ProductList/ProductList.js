import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from '@reach/router';
import './style.scss';

// Formatting number of price
const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const ProductList = (props) => {
  return (
    <div className='productlist-component'>
      <Container>
        <Row>
          {props.products &&
            props.products.map((item) => {
              return (
                <Col xs={6} sm={6} md={3} key={item._id}>

                  {/* Link đến chi tiết sản phẩm */}
                  <Link to={'/products/' + item._id} className='link-product'>
                    <div className='product-container'>
                      <img className='product-container__image' src={item.productImage} alt={item.name} />
                      <p>{item.name}</p>
                      <p>{formatNumber(item.price)} VND</p>
                    </div>
                  </Link>

                  <Button variant='secondary' onClick={() => props.addItem(item, 1)}>
                    Thêm vào giỏ hàng
                  </Button>
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