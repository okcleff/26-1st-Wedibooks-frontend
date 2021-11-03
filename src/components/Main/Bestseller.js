import React, { Component } from 'react';
import BestBook from './BestBook';

export class Bestseller extends Component {
  constructor() {
    super();
    this.state = {
      BestsellerList: [],
      startIndex: 0,
      endIndex: 5,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/BestsellerList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          BestsellerList: data,
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
    const { BestsellerList, startIndex, endIndex } = this.state;
    const { showBefore, showAfter } = this;

    return (
      <div className="bestSeller">
        <h1 className="bestSellerTitle">베스트셀러</h1>
        <div className="bestSellerGrid">
          {BestsellerList.slice(startIndex, endIndex).map(BestsellerList => {
            return (
              <BestBook
                key={BestsellerList.id}
                imgSrc={BestsellerList.imgSrc}
                rating={BestsellerList.rating}
                desc={BestsellerList.desc}
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

export default Bestseller;
