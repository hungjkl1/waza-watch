import React from 'react';
import { Router } from '@reach/router';

// Components
import NavigationBar from '../NavigationBar';
import Home from '../Home';
import Product from '../Products';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Router>
          <Home path='/' />
          <Product path='/product' />
        </Router>
      </div>
    )
  }
}
export default App
