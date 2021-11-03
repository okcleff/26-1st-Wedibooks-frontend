import React, { Component } from 'react';
import Bestseller from '../../components/Main/Bestseller';
import NewIssue from '../../components/Main/NewIssue';
import Recommendation from '../../components/Main/Recommendation';
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
