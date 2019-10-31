import React from 'react';
import { Container, Col, Row, Table } from 'react-bootstrap';
import ProductList from '../../components/ProductList';
// Style
import './products.scss';


class Products extends React.Component {
  constructor(props) {
    super(props);

  };

  sortByBrand = () => {

  };

  render() {
    return (
      <div>
        <Container>
          <Row>

            {/* Menu */}
            <Col md={2}>

              <div className='menu-container'>
                <div className='menu-container__child'>
                  <h5>Các loại đồng hồ</h5>
                  <ui className='menu-container__ul'>
                    <li><a href='/'>Đồng hồ Nam</a></li>
                    <li><a href='/'>Đồng hồ Nữ</a></li>
                    <li><a href='/'>Đồng hồ rẻ tiền</a></li>
                  </ui>
                </div>

                <div className='menu-container__child'>
                  <h5>Màu sắc</h5>
                  <ui className='menu-container__ul'>
                    <li><a href='#'>Nâu đâm</a></li>
                    <li><a href='#'>Xanh nhạt</a></li>
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
}

export default Products;
