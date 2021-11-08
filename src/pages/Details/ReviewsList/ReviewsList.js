import React, { Component } from 'react';
import StarRating from '../StarRating/StarRating';
import './ReviewsList.scss';

class ReviewsList extends Component {
  render() {
    const { bookDetail } = this.props;
    return (
      <div className="reviewListBox">
        <div className="reviewListStarBox" />
        구매자 리뷰
        <div className="userLine" />
        {bookDetail.map(el => (
          <ul className="listParent" key={el.id}>
            <li className="score">
              <StarRating />
              {el.rating}
            </li>
            <li className="userID">{el.username}</li>
            <li className="createDate">{el.created_at}</li>
            <li className="lastReviewContainer">{el.contents}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default ReviewsList;
