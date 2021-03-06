import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginModal from '../../components/LoginModal';
import './styles.scss';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAuthModal: false,
    };
  };

  // --- Logout --- //
  handleLogOut = () => {
    this.props.dispatch({ type: 'LOG_OUT' });
  };

  // ---  Modal control --- //
  hanđleShowAuthModal = () => {
    this.setState({ showAuthModal: true })
  };
  handleHideAuthModal = () => {
    this.setState({ showAuthModal: false })
  };
  render() {
    return (
      <div>
        <Navbar variant='dark' bg="dark" expand="lg">
          <Link to='/'>
            <Navbar.Brand>
              <img
                src="http://www.myiconfinder.com/uploads/iconsets/256-256-27836c2559cf3f445f078b79b5322247.png"
                width="30"
                height="30"
                className="logo-brand d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              Waza Watch
          </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* Right item */}
            <Nav className="mr-auto">
              <Link className='nav-link' to='/products'>Sản phẩm</Link>
              <Link className='nav-link' to='/contact'>Liên hệ</Link>
            </Nav>

            {/* Left item */}
            <Nav>
              {/* LOGIN AND USER INFOMATION */}
              {!this.props.user &&
                <Nav.Link onClick={this.hanđleShowAuthModal}>Đăng nhập</Nav.Link>
              }

              {this.props.user &&
                <NavDropdown title={'Xin chào ' + this.props.user.userName}>
                  <NavDropdown.Item href="#">Thông tin cá nhân</NavDropdown.Item>
                  <Link className='dropdown-item' to='/bills'>Lịch sử đơn hàng</Link>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='text-danger' onClick={this.handleLogOut}>Đăng xuất</NavDropdown.Item>
                </NavDropdown>
              }

              {/* SHOPPING CART */}
              <Link className='nav-link' to='/shoppingcart'><div className='cart-items-number'>{this.props.cartItems.length}</div>
                <img
                  width='22' height='22' className="logo-cart d-inline-block align-center ml-1"
                  src="https://image.flaticon.com/icons/svg/1170/1170678.svg" />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <LoginModal
          show={this.state.showAuthModal}
          hide={this.handleHideAuthModal} />
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    user: state.user
  };
};

export default connect(mapStateToProps)(NavigationBar);
