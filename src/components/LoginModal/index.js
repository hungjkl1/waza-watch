import React from 'react';
import { Modal, Button, Form, Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingState: 'LOGIN'
    };
  };

  // --- Đổi mục đăng kí/đăng nhập --- //
  handleChangeShowingState = () => {
    if (this.state.showingState === 'LOGIN') {
      this.setState({ showingState: 'SIGN_UP' });
    } else {
      this.setState({ showingState: 'LOGIN' })
    };
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hide} >
        {/* Khung đăng nhập */}
        {this.state.showingState === 'LOGIN' &&
          <LoginForm hide={this.props.hide} />
        }

        {/* Khung đăng kí */}
        {this.state.showingState === 'SIGN_UP' &&
          <SignUpForm hide={this.props.hide} />
        }

        <Modal.Footer>
          <Container>
            <Row>
              <Col>
                <div align='center'>
                  {this.state.showingState === 'LOGIN' && <a href='#' onClick={this.handleChangeShowingState}>Chưa là thành viên ?</a>}
                  {this.state.showingState === 'SIGN_UP' && <a href='#' onClick={this.handleChangeShowingState}>Quay lại đăng nhập</a>}
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>

      </Modal>
    );
  };
};

export default connect(null, null)(LoginModal);