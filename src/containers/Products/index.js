import React from 'react';
import { Container, Col, Row, Table } from 'react-bootstrap';
import ProductList from '../ProductList';
// Style
import { Link } from '@reach/router';
import './products.scss';
import API from '../../core'
import _ from 'lodash'

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.service = new API()
    this.state = {
      products: [],
      brands: [],
      category: []
    }
  };

  componentDidMount() {
    this.service.post('product/products').then(result => {
      this.service.post('brand/brands').then(brands => {
        this.service.post('category/categories').then(category => {
          this.setState({
            products: result.data,
            brands: brands.data,
            category: category.data
          })
        })
      })
    })
  }

  sortByBrand = async (id) => {
    this.service.post('product/sortproductsbybrand', { sort: id }).then(result => {
      this.setState({
        products: result.data
      })
    })
  }

  sortByCategory = async (id) => {
    this.service.post('product/sortproductsbycategory', { sort: id }).then(result => {
      this.setState({
        products: result.data
      })
    })
  }

  sortByPrice = async (sort) => {
    this.service.post('product/sortproductsbyprice', { sort }).then(result => {
      this.setState({
        products: result.data
      })
    })
  }

  getAll = async () => {
    this.service.post('product/products').then(result => {
      this.setState({
        products: result.data
      })
    })
  }


  render() {
    return (
      <div>
        <Container>
          <Row>

            {/* Menu */}
            <Col md={2}>
              <div className='menu-container'>
                <div className='menu-container__child'>
                  <h5 align='left'>Lọc</h5>
                  <ul className='menu-container__ul' style={{ textAlign: "left" }}>
                    <li onClick={() => this.sortByPrice(1)}>Giá tăng dần</li>
                    <li onClick={() => this.sortByPrice(-1)}>Giá giảm dần</li>
                  </ul>
                </div>

                <div className='menu-container__child'>
                  <h5 align='left'>Các loại đồng hồ</h5>
                  <ul className='menu-container__ul'>
                    <li onClick={() => this.getAll()}>
                      <Link style={{ textDecoration: 'none' }} to='/products'>Tất cả</Link>
                    </li>
                    {!_.isEmpty(this.state.brands) &&
                      this.state.category.map(item => {
                        return <li onClick={() => this.sortByCategory(item._id)} key={item._id}><Link style={{ textDecoration: 'none' }} to='/products'>{item.name}</Link><hr /></li>
                      })
                    }
                  </ul>
                </div>

                <div className='menu-container__child'>
                  <h5 align='left'>Các hãng đồng hồ</h5>
                  <ul className='menu-container__ul'>
                    <li onClick={() => this.getAll()}>
                      <Link style={{ textDecoration: 'none' }} to='/products'>Tất cả</Link>
                    </li>
                    {!_.isEmpty(this.state.brands) &&
                      this.state.brands.map(item => {
                        return <li onClick={() => this.sortByBrand(item._id)} key={item._id}><Link style={{ textDecoration: 'none' }} to='/products'>{item.name}</Link><hr /></li>
                      })
                    }
                  </ul>
                </div>
              </div>


            </Col>
            {/* Products */}
            <Col md={10}>
              <ProductList products={this.state.products} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Products;
