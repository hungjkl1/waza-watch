import React, { useState } from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';

// Components
import LoginForm from '../../components/LoginForm';
import SignUpForm from '../../components/SignUpForm';

const LoginModal = (props) => {
  const [show, setShow] = useState('LOGIN')

  const handleLogin = (values) => {
    const { login } = props;
    login(values);
  };

  const handleSignUp = (values) => {
    const { signup } = props;
    signup(values);
  };

  return (
    <Modal show={props.show} onHide={props.hide} >

      {show === 'LOGIN' && <LoginForm onSubmit={handleLogin} />}
      {show === 'SIGN_UP' && <SignUpForm onSubmit={handleSignUp} />}

      <Modal.Footer>
        <Container>
          <Row>
            <Col>
              <div align='center'>
                {show === 'LOGIN' &&
                  <a href='#' onClick={() => setShow('SIGN_UP')}>Chưa là thành viên ?</a>}
                {show === 'SIGN_UP' &&
                  <a href='#' onClick={() => setShow('LOGIN')}>Quay lại đăng nhập</a>}
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Footer>

    </Modal>
  );
};

export default LoginModal;