import React, { Component } from 'react';
import './NavLoginSignUp.scss';

export class NavLoginSignup extends Component {
  render() {
    return (
      <div>
        <header className="signInHeader">
          <a href="/" className="logo">
            RIDIBOOKS
          </a>
        </header>
        <div className="loginNav" />
      </div>
    );
  }
}

export default NavLoginSignup;
