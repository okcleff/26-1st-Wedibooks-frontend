import React, { Component } from 'react';
import Bestseller from './Bestseller/Bestseller';
import NewIssue from './NewIssue/NewIssue';
import Recommendation from './Recommendation/Recommendation';
import './Main.scss';

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <Recommendation />
        <Bestseller />
        <NewIssue />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Main;
