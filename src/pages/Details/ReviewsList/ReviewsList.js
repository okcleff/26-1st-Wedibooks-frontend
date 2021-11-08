import React, { Component } from 'react';
import StarRating from '../StarRating/StarRating';
import './ReviewsList.scss';

class ReviewsList extends Component {
  render() {
    const { bookDetail } = this.props;
    return (
      <div className="reviewListBox">
        <div className="reviewListStarBox">구매자 리뷰</div>
        <div className="userLine" />
        <div className="reviewBoxTag">
          {bookDetail.map(el => (
            <div className="listParent" key={el.id}>
              <div className="score">
                <StarRating />
                {el.rating}
              </div>
              <div className="userID">
                {el.username}
                <br />
                {el.created_at.substr(0, 10)}
              </div>
              <div className="lastReviewContainer">{el.contents}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ReviewsList;
