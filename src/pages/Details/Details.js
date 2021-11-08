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
      bookDetail: [],
    };
  }

  componentDidMount() {
    fetch('./data/DetailDataV2.json')
      .then(res => res.json())
      .then(output => {
        this.setState({
          bookDetail: output.message[0],
        });
      });
  }

  render() {
    const { bookDetail } = this.state;

    return (
      <article className="totalBox">
        {bookDetail.product_info && (
          <BookContainer bookDetail={bookDetail.product_info} />
        )}
        {bookDetail.product_info && (
          <BookIntroduction
            bookDetail={bookDetail.product_info}
            title="작품소개"
            contents={bookDetail.product_info.description}
          />
        )}
        {bookDetail.product_info && (
          <BookIntroduction
            bookDetail={bookDetail.product_info}
            title="목차"
            contents={bookDetail.product_info.index}
          />
        )}
        {bookDetail.product_info && (
          <UserReviews bookDetail={bookDetail.product_info} />
        )}

        {bookDetail.review_info && (
          <ReviewsList bookDetail={bookDetail.review_info} />
        )}
      </article>
    );
  }
}

export default Details;
