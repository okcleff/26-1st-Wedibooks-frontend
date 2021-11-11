import React, { Component } from 'react';
import './userNav.scss';

export class userNav extends Component {
  render() {
    return (
      <div className="topNav">
        <nav className="signUpHeader">
          <a href="/" className="logo">
            WEDIBOOKS
          </a>
        </nav>
        <div className="loginNav" />
      </div>
    );
  }
}

export default userNav;
