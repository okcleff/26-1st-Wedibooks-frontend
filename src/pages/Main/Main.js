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
          listUrl="./data/NewIssueList.json"
          misc="출간일 :"
          isIssue="true"
        />
        <MainSlides
          slideTitle="베스트셀러"
          listUrl="./data/BestSellerListAll.json"
          misc="평점 :"
        />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Main;
