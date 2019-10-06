import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row,Container} from 'react-bootstrap';
// Style
import './home.scss';

export default function index() {
  return (
    <div>
      <Container>
        <Row>
          <Col><div className='col-tam'>tam</div></Col>
          <Col>2 of 2</Col>
        </Row>

        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  )
}

