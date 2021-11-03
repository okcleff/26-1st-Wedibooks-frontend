import React, { Component } from 'react';
import BestBook from './BestBook';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import './Bestseller.scss';

export class Bestseller extends Component {
  constructor() {
    super();
    this.state = {
      bestsellerList: [],
      startIndex: 0,
      endIndex: 5,
    };
  }

  componentDidMount() {
    fetch('./data/BestsellerList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          bestsellerList: data,
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
    const { bestsellerList, startIndex, endIndex } = this.state;
    const { showBefore, showAfter } = this;

    return (
      <div className="bestSeller">
        <h1 className="bestSellerTitle">베스트셀러</h1>
        <button
          type="button"
          onClick={showBefore}
          className="beforeButton"
          disabled={startIndex === 0 ? true : false}
        >
          <AiOutlineDoubleLeft size="24" />
        </button>

        <div className="bestSellerGrid">
          {bestsellerList.slice(startIndex, endIndex).map(bestsellerList => {
            return (
              <BestBook
                key={bestsellerList.id}
                bestsellerList={bestsellerList}
              />
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

export default Bestseller;
