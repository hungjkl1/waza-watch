import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from '@reach/router'
import _ from 'lodash';

// Components
import AuthorizeModal from '../AuthorizeModal';
import './styles.scss';

const NavigationBar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { user, logout } = props;

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleLogout = () => logout();

  return (

    <div>
      <Navbar variant='dark' bg="dark" expand="lg">
        <Link to='/'>
          <Navbar.Brand>
            <img src="http://www.myiconfinder.com/uploads/iconsets/256-256-27836c2559cf3f445f078b79b5322247.png"
              width="30" height="30" className="logo-brand d-inline-block align-top"
              alt="logo" />
            Waza Watch
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className='nav-link' to='/products'>Sản phẩm</Link>
            <Link className='nav-link' to='/contact'>Liên hệ</Link>
          </Nav>

          <Nav>
            {_.isEmpty(user) &&
              <Nav.Link onClick={handleShowModal}>
                Đăng nhập
            </Nav.Link>
            }

            {!_.isEmpty(user) &&
              <NavDropdown title={'Xin chào ' + user.userName}>
                <NavDropdown.Item href="#">Thông tin cá nhân</NavDropdown.Item>
                <Link className='dropdown-item' to='/bills'>Lịch sử đơn hàng</Link>
                <NavDropdown.Divider />
                <NavDropdown.Item className='text-danger' onClick={handleLogout} >Đăng xuất</NavDropdown.Item>
              </NavDropdown>
            }

            {/* <Link className='nav-link' to='/shoppingcart'>
              <div className='cart-items-number'>
                {this.props.cartItems.length}
              </div>
              <img
                width='22' height='22' className="logo-cart d-inline-block align-center ml-1"
                src="https://image.flaticon.com/icons/svg/1170/1170678.svg" />
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Modal  */}
      <AuthorizeModal show={showModal} hide={handleCloseModal} />
    </div >
  )
};
export default NavigationBar;

