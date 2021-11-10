import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './pages/Details/Details';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/detail" component={Details} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
