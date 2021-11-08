import React, { Component } from 'react';
import BookBorrow from '../BookBorrow/BookBorrow';
import StarRating from '../StarRating/StarRating';
import './UserReviews.scss';

class UserReviews extends Component {
  render() {
    const { bookDetail } = this.props;
    const { average_rate } = bookDetail;
    return (
      <div className="userReviewsList">
        <div className="userReviewName">리뷰</div>
        <div className="reviewLine" />
        <div className="starBox">
          이 책을 평가해주세요!
          <div className="startRating">
            <StarRating />
            <StarRating />
            <StarRating />
            <StarRating />
            <StarRating />
          </div>
        </div>
        <div className="reviewBox">
          <StarRating />
          <div className="starRate">평점:{bookDetail.average_rate}</div>
          <input
            className="reviewInput"
            type="text"
            placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
          />
          <BookBorrow title="리뷰작성" />
        </div>
      </div>
    );
  }
}

export default UserReviews;
