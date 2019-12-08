import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
// Components
import InputField from '../InputField';
// Style
import './style.scss';
import { validateSignUp } from './validateSignUp';

const SignUpForm = (props) => {
  const { handleSubmit, submitting } = props
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title> Đăng kí</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Field name='userName' type='text' placeholder='Tên đăng nhập'
            component={InputField} />
          <Field name='password' type='password' placeholder='Mật khẩu'
            component={InputField} />
          <Field name='email' type='email' placeholder='Email'
            component={InputField} />
          <Field name='phone' type='number' placeholder='Số điện thoại'
            component={InputField} />
          <Field name='birthday' type='date' placeholder='Ngày sinh'
            component={InputField} />
          <Field name='gender' component="select" className='form-control' >
            <option value={true}>Nam</option>
            <option value={false}>Nữ</option>
          </Field>

          <Button className='login-button' variant="secondary"
            type="submit" disabled={submitting} block>Đăng kí</Button>
        </Form>
      </Modal.Body>
    </div>
  )
}
export default reduxForm({
  form: 'SignUpForm',
  validate: validateSignUp
})(SignUpForm)
