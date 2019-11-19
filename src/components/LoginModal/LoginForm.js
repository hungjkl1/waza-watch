import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import API from '../../core';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.service = new API();
    this.state = {
      userName: '',
      password: '',
      error: false
    };
  };

  handleLogin = (e) => {
    e.preventDefault();
    // Gọi API - Login
    this.service.post('/user/userlogin', {
      userName: this.state.userName,
      password: this.state.password
    })
      .then((result) => {
        if (result.data.result) {
          this.props.dispatch({type: 'LOGIN', user: result.data.result })
          this.setState({ error: false })
          this.props.hide();
        } else {
          this.setState({ error: true })
        }
      })
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title> Đăng nhập </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.state.error && <Alert variant='danger'>Sai mặt khẩu hoặc tài khoản</Alert>}

          <Form>
            <Form.Group>
              <Form.Control type="string" name='userName' placeholder="Tên tài khoản"
                onChange={this.changeHandler} value={this.state.userName} />
            </Form.Group>

            <Form.Group>
              <Form.Control type="password" name='password' placeholder="Mật khẩu"
                onChange={this.changeHandler} value={this.state.password} />
            </Form.Group>

            <Button block className type='submit' variant="secondary"
              onClick={this.handleLogin}>
              Đăng nhập
            </Button>
          </Form>
        </Modal.Body>
      </div>
    );
  };
}
export default connect(null, null)(LoginForm);
