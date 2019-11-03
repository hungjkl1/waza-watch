import React from 'react';
import { Modal, Button, Form, Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: true,
      SigninForm: false
    };
  };

  // --- Đổi mục đăng kí/đăng nhập --- //
  handleShowSignin = () => {
    this.setState({
      loginForm: false,
      SigninForm: true
    });
  };

  handleShowLogin = () => {
    this.setState({
      loginForm: true,
      SigninForm: false
    });
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hide} >
        {/* Khung đăng nhập */}
        {this.state.loginForm &&
          <LoginForm />
        }

        {/* Khung đăng kí */}
        {this.state.SigninForm &&
          <div>
            <Modal.Header>
              Đăng kí
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Tên tài khoản</Form.Label>
                  <Form.Control type="text" placeholder="User name" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Mật khẩu</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="secondary" onClick={this.props.hide} >Đăng kí</Button>

              </Form>
            </Modal.Body>
          </div>
        }

        {this.state.SigninForm &&
          <Modal.Footer>
            <div>
              <a onClick={this.handleShowLogin}>Đã là thành viên ?</a>
            </div>
          </Modal.Footer>
        }

      </Modal>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(null, null)(LoginModal);