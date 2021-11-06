import React, { Component } from 'react';
import StarRating from '../StarRating/StarRating';
import './ReviewsList.scss';

class ReviewsList extends Component {
  render() {
    return (
      <div className="reviewsList">
        <div className="listTitle">구매자</div>
        <div className="userLine" />
        <div className="reviewListBox">
          <div className="reviewListStarBox">
            <StarRating />
            <div className="userID">아이디 </div>
            <div className="createDate">게시일 </div>
          </div>
          <div className="lastReviewContainer">아하하하</div>
        </div>
      </div>
    );
  }
}

export default ReviewsList;
