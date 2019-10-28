import React from 'react';


class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showCart: false
    };
  };

  handleShowLogin = () => {
    this.setState({ showLogin: true })
  }
  handleHideLogin = () => {
    this.setState({ showLogin: false })
  }

  handleShowCart = () => {
    this.setState({ showCart: true })
  }
  handleHideCart = () => {
    this.setState({ showCart: false })
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Link to='/'>
            <Navbar.Brand>
              <img
                src="http://www.myiconfinder.com/uploads/iconsets/256-256-27836c2559cf3f445f078b79b5322247.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              Waza Watch
          </Navbar.Brand>
          </Link>

          <Nav className="">
            <Link className='nav-link' to='/products'>Sản phẩm</Link>
            <Link className='nav-link' to='/products'>Liên hệ</Link>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Link onClick={this.handleShowLogin}>Đăng nhập</Nav.Link>
            <Nav.Link onClick={this.handleShowCart}>Giỏ hàng
              <img
                width='22' height='22' className="d-inline-block align-top ml-2"
                src="https://img.icons8.com/cotton/64/000000/shopping-cart--v1.png" />
            </Nav.Link>
          </Nav>
        </Navbar>

        <LoginModal
          show={this.state.showLogin}
          hide={this.handleHideLogin} />

        <CartModal
          show={this.state.showCart}
          hide={this.handleHideCart} />
      </div>
    );
  }
}

export default NavbarComponent;
