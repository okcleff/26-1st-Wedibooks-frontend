import React, { Component } from 'react';
import BookIntroduction from './BookIntroduction/BookIntroduction';
import BookBorrow from './BookBorrow/BookBorrow';
import StarRating from './StarRating/StarRating';
import UserReviews from './UserReviews/UserReviews';
import ReviewsList from './ReviewsList/ReviewsList';
import BookContainer from './BookContainer/BookContainer';

import './Details.scss';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      bookDetail: [],
      url: './data/DetailDataV2.json',
    };
  }

  componentDidMount() {
    const { url } = this.state;
    fetch(url)
      .then(res => res.json())
      .then(output => {
        this.setState({
          bookDetail: output.message[0],
        });
      });
  }

  render() {
    const { bookDetail } = this.state;
    const { description, index } = bookDetail;
    console.log(bookDetail.product_info && bookDetail.product_info.author);
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

        {bookDetail.review_info &&
          bookDetail.review_info.map(el => {
            return <UserReviews key={el.id} bookDetail={el} />;
          })}

        {bookDetail.review_info &&
          bookDetail.review_info.map(el => {
            return <ReviewsList key={el.id} bookDetail={el} />;
          })}
      </article>
    );
  }
}

export default Details;
