import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
// Components
import InputField from '../InputField';
// Style
import './style.scss';
import { validateLogin } from './validateLogin';

const LoginForm = (props) => {
  const { handleSubmit, submitting } = props
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title> Đăng nhập </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Field name='userName' type='text' placeholder='Tên đăng nhập'
            component={InputField} />
          <Field name='password' type='password' placeholder='Mật khẩu'
            component={InputField} />

          <Button className='login-button' variant="secondary"
            type="submit" disabled={submitting} block>Đăng nhập</Button>
        </Form>
      </Modal.Body>
    </div>
  )
}
export default reduxForm({
  form: 'LoginForm',
  validate: validateLogin
})(LoginForm)
