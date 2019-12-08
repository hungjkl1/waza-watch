import React from 'react';
import { Form } from 'react-bootstrap';
import './style.scss';

const InputField = ({ input, label, type, placeholder, meta: { touched, error } }) => {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...input} type={type} placeholder={placeholder} />
      {touched && (error && <Form.Text className='error text-danger'>{error}</Form.Text>)}
    </Form.Group>
  )
};
export default InputField;