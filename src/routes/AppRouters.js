import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

// Components
import Home from '../containers/Home';
import NavigationBar from '../containers/NavigationBar';
import Products from '../containers/Products';
import ProductDetail from '../containers/ProductDetail';
import Footer from '../containers/Footer';

export default class AppRouters extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <Switch>
            <Route path='/' component={Home} exact={true} />
            <Route exact path='/products' component={Products} />
            <Route path='/products/:name' children={ProductDetail} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    )
  }
}