import React from 'react';
import { Form, Button } from 'react-bootstrap';

const FormDelivery = (props) => {
  return (
    <div>
      <hr />
      {props.user &&
        <Form>
          <Form.Group>
            <Form.Label>Địa chỉ giao hàng</Form.Label>
            <Form.Control type="string" />
          </Form.Group>
          <Button className='btn-secondary' variant="primary" type="submit">Thanh toán</Button>
        </Form>
      }

      {!props.user &&
        <Form>
          <Form.Group>
            <Form.Label>Họ tên</Form.Label>
            <Form.Control type="string" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Địa chỉ giao hàng</Form.Label>
            <Form.Control type="string" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="string" />
          </Form.Group>
          <Button className='btn-secondary' variant="primary" type="submit">Thanh toán</Button>
        </Form>
      }
    </div>
  )
};
export default FormDelivery;
