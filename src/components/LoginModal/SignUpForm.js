import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import API from '../../core';
import Swal from 'sweetalert2';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.service = new API();
    this.state = {
      newUser: {
        userName: '', password: '',
        email: '', phone: undefined,
        birthday: Date.now(), gender: true
      },
      error: false
    };
  };

  handleSignUp = (e) => {
    e.preventDefault();
    // Gọi API - Create user
    this.service.post('user/adduser', { data: this.state.newUser })
      .then((result) => {
        this.props.hide();
        Swal.fire({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 1500,
          type: "success",
          title: "Đăng kí thành công"
        });
        this.props.dispatch({type: 'LOGIN', user: result.data })
      })
      .catch((error)=>{
        alert(error)
      })
  };

  changeHandler = (e) => {
    this.setState({
      newUser: { ...this.state.newUser, [e.target.name]: e.target.value }
    });
  };

  render() {
    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title> Đăng kí </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.state.error && <Alert variant='danger'>Sai mặt khẩu hoặc tài khoản</Alert>}

          <Form>
            <Form.Group>
              <Form.Control type="string" name='userName' placeholder="Tên tài khoản"
                onChange={this.changeHandler} value={this.state.newUser.userName} />
            </Form.Group>

            <Form.Group>
              <Form.Control type="password" name='password' placeholder="Mật khẩu"
                onChange={this.changeHandler} value={this.state.newUser.password} />
            </Form.Group>

            <Form.Group>
              <Form.Control type="email" name='email' placeholder="Email"
                onChange={this.changeHandler} value={this.state.newUser.email} />
            </Form.Group>

            <Form.Group>
              <Form.Control type="number" name='phone' placeholder="Số điện thoại"
                onChange={this.changeHandler} value={this.state.newUser.phone} />
            </Form.Group>

            <Form.Group>
              <Form.Control type="date" name='birthday' placeholder="Ngày sinh"
                onChange={this.changeHandler} value={this.state.newUser.birthday} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Giới tính</Form.Label>
              <Form.Control as="select" name='gender' value={this.state.newUser.gender} onChange={this.changeHandler}>
                <option value={true}>Nam</option>
                <option value={false}>Nữ</option>
              </Form.Control>
            </Form.Group>

            <Button block className type='submit' variant="secondary"
              onClick={this.handleSignUp}>
              Đăng kí
            </Button>
          </Form>
        </Modal.Body>
      </div>
    );
  };
}
export default connect(null, null)(SignUpForm);
