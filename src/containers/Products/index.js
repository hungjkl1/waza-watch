import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProductList from '../../components/ProductListComponent';
// Style
import './products.scss';


const Products= (props) => {
  return (
    <div>
      <Container>
        <Row>

          {/* Menu */}
          <Col md={2}>
            <div className='menu-container '>
              <h5 align="center">Các loại đồng hồ</h5>
              <ui className='menu-container__ul'>
                <li><a href='/'>Đồng hồ Nam</a></li>
                <li><a href='/'>Đồng hồ Nữ</a></li>
                <li><a href='/'>Đồng hồ rẻ tiền</a></li>
              </ui>

              <h5 align="center">Màu sắc</h5>
              <ui className='menu-container__ul'>
                <li><a href='/'>Nâu đâm</a></li>
                <li><a href='/'>Xanh nhạt</a></li>
                <li><a href='/'>Hồng hà</a></li>
              </ui>
            </div>
          </Col>

          {/* Products */}
          <Col md={10}>
            <ProductList />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Products;
