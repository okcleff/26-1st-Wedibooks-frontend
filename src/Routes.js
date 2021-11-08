import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Categories from './pages/Categories/Categories';
import CategoriesBestseller from './pages/Categories/CategoryBest/CategoryBestseller';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/categories" component={Categories} />
          <Route
            exact
            path="/categories/:id"
            component={CategoriesBestseller}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
