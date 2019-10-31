import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from './products.json';
import './productList.scss';

// Formatting number of price
const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  };

  // FIXME : Để Fetch data với API
  componentDidMount() {

    this.setState(() => ({
      products: products
    }));
  };

  render() {
    return (
      <div className='productlist-component'>
        <Container>
          <Row>
            {
              this.state.products.map((item) => {
                return (
                  <Col xs={6} sm={6} md={3}>
                    {/* Link đến chi tiết sản phẩem */}
                    <Link to={'/products/' + item.id} className='link-product'>
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
}
export default ProductList;