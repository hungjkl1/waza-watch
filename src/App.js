import React from 'react';
import './App.css';
// Page
import Home from './containers/Home';
import Product from './containers/Products';
import NavigationBar from './containers/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Product />
    </div>
  );
}

export default App;
