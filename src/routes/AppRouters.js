import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

// Components
import Home from '../containers/Home';
import NavigationBar from '../containers/NavigationBar';
import Products from '../containers/Products';
import ProductDetail from '../containers/ProductDetail';
import ShoppingCart from '../containers/ShoppingCart';
import NotFound from '../containers/NotFound';

class AppRouters extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <Switch>
            <Route path='/' component={Home} exact={true} />
            <Route path='/shoppingcart' component={ShoppingCart} />
            <Route exact path='/products' component={Products} />
            <Route path='/products/:id' component={ProductDetail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  };
};
export default AppRouters;
