import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Category from './pages/Nav/Category';
import LoginNav from './components/Nav/LoginNav';
export class Routes extends Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Nav} />
          <Route exact path="/LoginNav" component={LoginNav} />
          <Route exact path="/Footer" component={Footer} />
          <Route exact path="/Category" component={Category} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
