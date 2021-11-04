import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
