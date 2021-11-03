import React, { Component } from 'react';
import RecommendedBook from './RecommendedBook';

export class Recommendation extends Component {
  constructor() {
    super();
    this.state = {
      NewIssueList: [],
      startIndex: 0,
      endIndex: 5,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/NewIssueList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          NewIssueList: data,
        });
      });
  }

  render() {
    const { NewIssueList, startIndex, endIndex } = this.state;
    const { showBefore, showAfter } = this;

    return (
      <div className="recommendation">
        <h1 className="recommendationTitle">오늘, 리디의 발견</h1>
        <div>
          <RecommendedBook />
        </div>
      </div>
    );
  }
}

export default Recommendation;
