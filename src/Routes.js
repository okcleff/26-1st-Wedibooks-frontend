import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Categories from './pages/Categories/Categories';
import Details from './pages/Details/Details';
import Cart from './pages/Cartpage/Cart';
import Footer from './components/Footer/Footer';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route
            exact
            path="/categories/subcategories/:id"
            component={Categories}
          />
          <Route exact path="/products/:id" component={Details} />
          <Route exact path="/Cartpage" component={Cart} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
