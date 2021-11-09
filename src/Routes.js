import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Categories from './pages/Categories/Categories';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route
            exact
            path="/categories/subcategories/:id"
            component={Categories}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
