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
            <div className="userID">{this.props.bookDetail.username} </div>
            <div className="createDate">
              {this.props.bookDetail.created_at}{' '}
            </div>
          </div>
          <div className="lastReviewContainer">
            {this.props.bookDetail.contents}
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsList;
