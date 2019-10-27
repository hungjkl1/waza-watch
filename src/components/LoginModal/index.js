import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: true,
      SigninForm: false
    }
  }
  
  handleShowSignin = () => {
    this.setState({
      loginForm: false,
      SigninForm: true
    })
  }

  handleShowLogin = () => {
    this.setState({
      loginForm: true,
      SigninForm: false
    })
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hide} >

        {/* Khung đăng nhập */}
        {this.state.loginForm &&
          <div>
            <Modal.Header>
              Đăng nhập
          </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Mật khẩu</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="secondary" onClick={this.props.hide} >Đăng nhập</Button>

              </Form>
            </Modal.Body>
          </div>
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
                  <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Mật khẩu</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="secondary" onClick={this.props.hide} >Đăng nhập</Button>

              </Form>
            </Modal.Body>
          </div>
        }

        {this.state.loginForm &&
          <Modal.Footer>
            <div>
              <a onClick={this.handleShowSignin}>Chưa là thành viên ?</a>
            </div>
          </Modal.Footer>
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
export default LoginModal;