import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import login from './pages/Login/login';
import signUp from './pages/SignUp/signUp';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={signUp} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
