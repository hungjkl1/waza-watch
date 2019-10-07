import React from 'react';
import './App.css';
// Page
import Home from './containers/Home';
import NavigationBar from './containers/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home />
    </div>
  );
}

export default App;
