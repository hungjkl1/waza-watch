import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginModal from '../../components/LoginModal';
import CartModal from '../../components/CartModal';
import './styles.scss';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showCart: false,
    };
  };

  // ---  Modal control --- //
  handleShowLogin = () => {
    this.setState({ showLogin: true })
  };
  handleHideLogin = () => {
    this.setState({ showLogin: false })
  };

  handleShowCart = () => {
    this.setState({ showCart: true })
  };
  handleHideCart = () => {
    this.setState({ showCart: false })
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
              <Link className='nav-link' to='/products'>Liên hệ</Link>
            </Nav>

            {/* Left item */}
            <Nav>
              {/* LOGIN AND USER INFOMATION */}
              {this.props.user.username === '' &&
                <Nav.Link onClick={this.handleShowLogin}>Đăng nhập</Nav.Link>
              }

              {/* SHOPPING CART */}
              <Nav.Link onClick={this.handleShowCart}>Giỏ hàng [{this.props.cartItems.length}]
                    <img
                  width='22' height='22' className="logo-cart d-inline-block align-top ml-2"
                  src="https://img.icons8.com/cotton/64/000000/shopping-cart--v2.png" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <LoginModal
          show={this.state.showLogin}
          hide={this.handleHideLogin} />

        <CartModal
          show={this.state.showCart}
          hide={this.handleHideCart} />
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
