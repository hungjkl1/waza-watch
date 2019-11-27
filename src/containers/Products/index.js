import React from 'react';
import { Container, Col, Row, Table } from 'react-bootstrap';
import ProductList from '../../components/ProductList';
// Style
import {Link} from 'react-router-dom'
import './products.scss';
import API from  '../../core'
import _ from 'lodash'

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.service = new API()
    this.state = {
      products:[],
      brands:[]
    }
  };
  
  componentDidMount(){
    this.service.post('product/products').then(result=>{
      this.service.post('brand/brands').then(brands=>{
        this.setState({
          products:result.data,
          brands:brands.data
        })
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
                  <h5 align='left'>Các loại đồng hồ</h5>
                  <ui className='menu-container__ul'>
                    <li><a href='/'>Đồng hồ Nam</a></li>
                    <li><a href='/'>Đồng hồ Nữ</a></li>
                    <li><a href='/'>Đồng hồ rẻ tiền</a></li>
                  </ui>
                </div>

                <div className='menu-container__child'>
                  <h5 align='left'>Các hãng đồng hồ</h5>
                  <u className='menu-container__ul'>
                  { !_.isEmpty(this.state.brands) && 
                    this.state.brands.map(item=>{
                      return <li key={item._id}><Link style={{ textDecoration: 'none' }} to='/products'>{item.name}</Link></li>
                    })
                  }
                  </u>
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
