import React, { Component } from 'react';
import BookBorrow from '../BookBorrow/BookBorrow';
import StarRating from '../StarRating/StarRating';
import NewStar from '../NewStar';
import './UserReviews.scss';

class UserReviews extends Component {
  constructor() {
    super();
    this.state = {
      newComment: '',
      comments: [],
    };
  }

  textChange = e => {
    this.setState({
      newComment: e.target.value,
    });
  };

  add = () => {
    let arr = this.state.comments;
    arr.push({
      text: this.state.newComment,
    });

    this.setState({
      comments: arr,
      newComments: '',
    });
  };

  pressEnter = e => {
    if (e.key === 'Enter' && this.state.newComment) {
      this.add();
      e.target.value = '';
      this.setState({
        newComment: '',
      });
    }
  };

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
            <NewStar />
          </div>
        </div>
        <div className="reviewBox">
          <StarRating />
          <div className="starRate">평점:{average_rate}</div>
          <input
            className="reviewInput"
            type="text"
            placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
            onChange={this.textChange}
            onKeyPress={this.pressEnter}
            value={this.state.newComment}
          />
          <BookBorrow title="리뷰작성" onClick={this.add} />
        </div>
      </div>
    );
  }
}

export default UserReviews;
