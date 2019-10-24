import React from 'react';
import { Container, Col, Row, Table } from 'react-bootstrap';
import ProductList from '../../components/ProductListComponent';
// Style
import './products.scss';


const Products = (props) => {
  return (
    <div>
      <Container>
        <Row>

          {/* Menu */}
          <Col md={2}>

            <div className='menu-container'>
              <div className='menu-container__child'>
                <h5 align="center">Các loại đồng hồ</h5>
                <ui className='menu-container__ul'>
                  <li align='center'><a href='/'>Đồng hồ Nam</a></li>
                  <li align='center'><a href='/'>Đồng hồ Nữ</a></li>
                  <li align='center'><a href='/'>Đồng hồ rẻ tiền</a></li>
                </ui>
              </div>

              <div className='menu-container__child'>
                <h5 align="center">Màu sắc</h5>
                <ui className='menu-container__ul'>
                  <li align='center'><a href='/'>Nâu đâm</a></li>
                  <li align='center'><a href='/'>Xanh nhạt</a></li>
                  <li align='center'><a href='/'>Hồng hà</a></li>
                </ui>
              </div>
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
