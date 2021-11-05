import React, { Component } from 'react';
import NewBook from './NewBook';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import './NewIssue.scss';

export class NewIssue extends Component {
  constructor() {
    super();
    this.state = {
      newIssueList: [],
      startIndex: 0,
      endIndex: 5,
    };
  }

  componentDidMount() {
    fetch('./data/NewIssueList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          newIssueList: data,
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
    const { newIssueList, startIndex, endIndex } = this.state;
    const { showBefore, showAfter } = this;

    return (
      <div className="newIssue">
        <h1 className="newIssueTitle">집 앞 서점에 방금 나온 신간!</h1>
        <button
          type="button"
          onClick={showBefore}
          className="beforeButton"
          disabled={startIndex === 0 ? true : false}
        >
          <AiOutlineDoubleLeft size="24" />
        </button>

        <div className="newIssueGrid">
          {newIssueList.slice(startIndex, endIndex).map(newIssueList => {
            return (
              <NewBook key={newIssueList.id} newIssueList={newIssueList} />
            );
          })}
        </div>

        <button
          type="button"
          onClick={showAfter}
          className="afterButton"
          disabled={endIndex === 20 ? true : false}
        >
          <AiOutlineDoubleRight size="24" />
        </button>
      </div>
    );
  }
}

export default NewIssue;
