import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
// Components
import InputField from '../InputField';
import { validateBillCreate } from './validateBillCreate';

const BillCreateForm = (props) => {
  const { handleSubmit, submitting } = props
  return (
    <div>

      {_.isEmpty(props.user) &&
        <Form onSubmit={handleSubmit}>
          <Field name='name' type='text' placeholder='Họ tên'
            component={InputField} />
          <Field name='address' type='text' placeholder='Địa chỉ giao hàng'
            component={InputField} />
          <Field name='phone' type='number' placeholder='Số điện thoại'
            component={InputField} />
          <Field name='email' type='text' placeholder='Email'
            component={InputField} />

          <Button className='login-button' variant="secondary"
            type="submit" disabled={submitting} block>Thanh toán</Button>
        </Form>
      }
      
      {!_.isEmpty(props.user) &&
        <Form onSubmit={handleSubmit}>
          <Field name='address' type='text' placeholder='Địa chỉ giao hàng'
            component={InputField} />

          <Button className='login-button' variant="secondary"
            type="submit" disabled={submitting} block>Thanh toán</Button>
        </Form>
      }
    </div>
  )
}
export default reduxForm({
  form: 'BillCreateForm',
  validate: validateBillCreate
})(BillCreateForm)
