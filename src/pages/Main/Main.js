import React, { Component } from 'react';
import Recommendation from './Recommendation/Recommendation';
import MainSlides from './MainSlides/MainSlides';
import './Main.scss';

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <Recommendation />
        <MainSlides
          slideTitle="집 앞 서점에 방금 나온 신간"
          listUrl="http://10.58.0.31:8000/products?new_books=True"
          misc="출간일 :"
          isIssue="true"
        />
        <MainSlides
          slideTitle="베스트셀러"
          listUrl="http://10.58.0.31:8000/products?rating=-average_rating"
          misc="평점 :"
        />
      </div>
    );
  }
}

export default Main;
