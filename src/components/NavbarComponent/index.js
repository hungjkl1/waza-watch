import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './styles.scss'
const NavbarComponent = () => {
    return (
      <div>
      <Navbar bg="grey" variant="light">
      <Nav className='nav-left'>
        <Nav.Link className='nav-div-center' href="#home"><div>
          <b>
          Waza Watch
          </b>
      </div></Nav.Link>
        </Nav>
      <Nav className="ml-auto mr-auto">
        <Nav.Link className='nav-div-center' href="#home"><div>
          <img className='logo-nav' src='http://logok.org/wp-content/uploads/2015/03/Hublot-logo-340x214.png'  alt='error'/>
        </div></Nav.Link>
        </Nav>
        <Nav className='nav-right' > 
        <Nav.Item href="#home" className='ml-auto'>
        <div>
        <img className='logo-nav' src='img/cart.png' alt='error'/>
      </div>
      </Nav.Item>
        </Nav>
    </Navbar>
      <Nav className="ml-auto nav-bg">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#pricing">Man</Nav.Link>
        <Nav.Link href="#pricing">Woman</Nav.Link>
        <Nav.Link href="#pricing">Brands</Nav.Link>
        <Nav.Link href="#features">Contact Us</Nav.Link>
        <Nav.Link href="#pricing">Products</Nav.Link>

      </Nav>
      </div>
    );
}

export default NavbarComponent;
