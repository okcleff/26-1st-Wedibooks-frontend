import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Categories from './pages/Categories/Categories';
import Footer from './components/Footer/Footer';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/" component={Login} />
          <Route exact path="/" component={Main} />
          <Route
            exact
            path="/categories/subcategories/:id"
            component={Categories}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
