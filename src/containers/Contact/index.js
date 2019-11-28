import React from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
// Style
import './style.scss';

const Contact = (props) => {
  return (
    <div className='contact-component'>
      <Container className='contact-container'>
        <Row>
          <Col>
            <h4>Thông tin của shop</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="Địa chỉ Email" />
              </Form.Group>

              <Form.Group>
                <Form.Control type="text" placeholder="Họ tên" />
              </Form.Group>

              <Form.Group>
                <Form.Control as="textarea" rows="3" placeholder="Nội dung liên lạc" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Liên lạc
              </Button>
            </Form>
          </Col>

          <Col md={6}>
            <img className='map'
              src='https://previews.123rf.com/images/mastakas/mastakas1411/mastakas141100003/33397324-abstract-simple-city-map-with-park-zones-and-pins.jpg'
              alt='map' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Contact;
