import React, { Component } from 'react';
import RecommendedBook from './RecommendedBook';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import './Recommendation.scss';

export class Recommendation extends Component {
  constructor() {
    super();
    this.state = {
      recommendationList: [],
      startIndex: 0,
      endIndex: 1,
    };
  }

  componentDidMount() {
    fetch('./data/RecommendationList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          recommendationList: data,
        });
      });
  }

  showAfter = () => {
    const { startIndex, endIndex } = this.state;
    this.setState({
      startIndex: startIndex + 1,
      endIndex: endIndex + 1,
    });
  };

  showBefore = () => {
    const { startIndex, endIndex } = this.state;
    this.setState({
      startIndex: startIndex - 1,
      endIndex: endIndex - 1,
    });
  };

  render() {
    const { recommendationList, startIndex, endIndex } = this.state;
    const { showBefore, showAfter } = this;

    return (
      <div className="recommendation">
        <h1 className="recommendationTitle">오늘, 위디의 발견</h1>
        <div className="recommendationMain">
          <button
            type="button"
            onClick={showBefore}
            className="beforeButton"
            disabled={startIndex === 0 ? true : false}
          >
            <AiOutlineDoubleLeft size="24" />
          </button>

          <div>
            {recommendationList
              .slice(startIndex, endIndex)
              .map(recommendationList => {
                return (
                  <RecommendedBook
                    key={recommendationList.id}
                    recommendationList={recommendationList}
                  />
                );
              })}
          </div>

          <button
            type="button"
            onClick={showAfter}
            className="afterButton"
            disabled={endIndex === 10 ? true : false}
          >
            <AiOutlineDoubleRight size="24" />
          </button>
        </div>
      </div>
    );
  }
}

export default Recommendation;
