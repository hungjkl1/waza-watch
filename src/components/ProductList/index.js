import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import products from './products.json';
import Swal from 'sweetalert2';
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

  addItemToCart = (item) => {
    this.props.dispatch({
      type: 'ADD_ITEM',
      item, quantity: 1
    });
    // --- Sweet alert --- //
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
      <div className='productlist-component'>
        <Container>
          <Row>
            { this.props.products &&
              this.props.products.map((item) => {
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

                    <Button variant='secondary' onClick={() => this.addItemToCart(item)}>
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
}

export default connect(null, null)(ProductList);