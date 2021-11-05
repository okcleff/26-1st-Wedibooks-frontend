import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Details from './pages/Details/Details';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Nav} />
          <Route exact path="/detail" component={Details} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
