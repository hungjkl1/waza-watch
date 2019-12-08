import React, { useEffect } from 'react';
import { Router } from '@reach/router';

// Components
import NavigationBar from '../NavigationBar';
import Home from '../Home';
import Products from '../Products';
import ProductDetail from '../ProductDetail';

const App = (props) => {
  const { getCurrentUser } = props;
  useEffect(() => {
    getCurrentUser();
  }, [])

  return (
    <div>
      <NavigationBar />
      <Router>
        <Home path='/' />
        <Products path='/products' />
        <ProductDetail path='/products/:productID' />
      </Router>
    </div>
      )
    }
    
    export default App
