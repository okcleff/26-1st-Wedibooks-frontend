import React, { Component } from 'react';
import BookIntroduction from './BookIntroduction/BookIntroduction';
import UserReviews from './UserReviews/UserReviews';
import ReviewsList from './ReviewsList/ReviewsList';
import BookContainer from './BookContainer/BookContainer';

import './Details.scss';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      bookDetail: {},
      newComment: '',
    };
  }

  componentDidMount() {
    fetch(`http://10.58.7.203:8000/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(output => {
        this.setState({
          bookDetail: output.message,
        });
      });
  }

  textChange = e => {
    this.setState({
      newComment: e.target.value,
    });
  };

  pressEnter = commentInput => {
    const { newComment } = this.state;
    if (commentInput.key === 'Enter' && newComment) {
      commentInput.target.value = '';
      this.setState({
        newComment: '',
      });
    }
  };

  render() {
    const { bookDetail, commentInput } = this.state;
    return (
      <article className="totalBox">
        {bookDetail.product_info && (
          <>
            <BookContainer bookDetail={bookDetail.product_info} />

            <BookIntroduction
              bookDetail={bookDetail.product_info}
              title="작품소개"
              contents={bookDetail.product_info.description}
            />

            <BookIntroduction
              bookDetail={bookDetail.product_info}
              title="목차"
              contents={bookDetail.product_info.index}
            />

            <UserReviews
              bookDetail={bookDetail.product_info}
              showScore={this.showScore}
              textChange={this.textChange}
              commentInput={commentInput}
              pressEnter={this.pressEnter}
            />
          </>
        )}

        {bookDetail.review_info && (
          <ReviewsList bookDetail={bookDetail.review_info} />
        )}
      </article>
    );
  }
}

export default Details;
