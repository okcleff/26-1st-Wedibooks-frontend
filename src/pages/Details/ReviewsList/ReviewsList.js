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
            <ul className="listParent" key={el.id}>
              <li className="score">
                <StarRating />
                {el.rating}
              </li>
            </ul>
          ))}
          {bookDetail.map(el => (
            <ul className="listChild" key={el.id}>
              <li className="userID">{el.username}</li>
              <li className="createDate">{el.created_at.substr(0, 10)}</li>
            </ul>
          ))}
          {bookDetail.map(el => (
            <ul className="listGrandChild" key={el.id}>
              <li className="lastReviewContainer">{el.contents}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default ReviewsList;
