import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Cart from './pages/Cart/Cart';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Nav} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
