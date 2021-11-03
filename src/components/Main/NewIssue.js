import React, { Component } from 'react';
import NewBook from './NewBook';

export class NewIssue extends Component {
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

  showAfter = () => {
    const { startIndex, endIndex } = this.state;

    this.setState({
      startIndex: startIndex + 5,
      endIndex: endIndex + 5,
    });
  };

  showBefore = () => {
    const { startIndex, endIndex } = this.state;
    this.setState({
      startIndex: startIndex - 5,
      endIndex: endIndex - 5,
    });
  };

  render() {
    const { NewIssueList, startIndex, endIndex } = this.state;
    const { showBefore, showAfter } = this;

    return (
      <div className="newIssue">
        <h1 className="newIssueTitle">집 앞 서점에 방금 나온 신간!</h1>
        <div className="newIssueGrid">
          {NewIssueList.slice(startIndex, endIndex).map(NewIssueList => {
            return (
              <NewBook
                key={NewIssueList.id}
                imgSrc={NewIssueList.imgSrc}
                date={NewIssueList.issueDate}
              />
            );
          })}
        </div>
        <div className="showBtnWrapper">
          <button
            type="button"
            onClick={showBefore}
            className="showButton"
            disabled={startIndex === 0 ? true : false}
          >
            이전 5개
          </button>
          <button
            type="button"
            onClick={showAfter}
            className="showButton"
            disabled={endIndex === 20 ? true : false}
          >
            다음 5개
          </button>
        </div>
      </div>
    );
  }
}

export default NewIssue;
