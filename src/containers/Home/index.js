import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Card, Button, Carousel } from 'react-bootstrap';
// Image
import image from './image.json';
// Style
import './home.scss';
const Home = (props) => {
  return (
    <div className="home-component">
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="img/watch.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Các kiểu mẫu đặc sắc</h3>
                  <p>Thu hút mọi ánh nhìn từ kiểu mẫu lạ mắt.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="img/watch1.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Độc đáo, bắt mắt, sang trọng</h3>
                  <p>Những kiểu dáng đẹp và sang trọng nhất.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row>
          {
            image.smallImage.map((item) => {
              return (
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

        {/* San pham mau */}
        <Row>
          <div className='example-image-container'>
            <Row>
              {
                image.exampleImage.map((item) => {
                  return (
                    <Col xs={6} sm={6} md={3}>
                      <div className='example-image-container__example-image'>
                        <img src={item.url}
                          width='100%' />
                      </div>
                    </Col>
                  )
                })
              }
            </Row>

            <Row>
              <Col>
                <h2>SẢN PHẨM MỚI</h2>
              </Col>
            </Row>
          </div>
        </Row>
        {/* Co-Founder */}
        <Row>
          {
            image.founders.map((item) => {
              return (
                <Col sm={12} md={6}>
                  <Card style={{ width: '100%' }} className='card'>
                    <Card.Img variant="top" src={item.url} className='card__img' />
                    <Card.Body>
                      <Card.Title className="card__title">{item.name}</Card.Title>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                      <Button variant="primary">Liên hệ</Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}
export default Home;

