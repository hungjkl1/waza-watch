import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
// Image
import image from './image.json';
// Style
import './home.scss';

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <div className='big-image-container'>
              <img src={image.bigImage[0].url}
                alt="example"
                width='100%' />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className='big-image-container'>
              <img src={image.bigImage[1].url}
                alt="example"
                width='100%' />
            </div>
          </Col>
        </Row>

        <Row>
          {
            image.smallImage.map((item)=>{
              return(
                <Col xs={6} sm={6} md={3}>
                <div className='small-image-container'>
                  <img src={item.url}
                    alt="example"
                    width='100%' />
                </div>
              </Col>
              )
            })
          }
        </Row>

        <div className='example-image-container'>
          <Row>
            <Col sm={6} md={3}>
              <div className='example-image-container__example-image'>
                <img src="https://cdn.shopify.com/s/files/1/0650/7427/products/fte3011-rose-gold-grey-minimal-ladies-watch_700x.jpg?v=1552765336"
                  alt="example"
                  width='100%' />
              </div>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <h2>New Arrivals</h2>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
export default Home;

