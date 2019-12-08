import React, { useEffect } from 'react';
import { Router } from '@reach/router';

// Components
import NavigationBar from '../NavigationBar';
import Home from '../Home';
import Products from '../Products';
import ProductDetail from '../ProductDetail';
import ShoppingCart from '../ShoppingCart';

const App = (props) => {
  const { getCurrentUser, getCart } = props;
  useEffect(() => {
    getCurrentUser();
    getCart();
  }, [])

  return (
    <div>
      <NavigationBar />
      <Router>
        <Home path='/' />
        <Products path='/products' />
        <ProductDetail path='/products/:productID' />
        <ShoppingCart path='/shoppingcart' />
      </Router>
    </div>
  )
}

export default App
