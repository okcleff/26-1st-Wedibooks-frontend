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
      url: './data/DetailData.json',
    };
  }

  componentDidMount() {
    const { url } = this.state;
    fetch(url)
      .then(res => res.json())
      .then(output => {
        this.setState({
          bookDetail: output,
        });
      });
  }

  render() {
    const { bookDetail } = this.state;
    const { description, index } = bookDetail;

    return (
      <article className="totalBox">
        {bookDetail.map(el => {
          return <BookContainer key={el.id} bookDetail={el} />;
        })}
        {bookDetail.map(el => {
          return (
            <BookIntroduction
              key={el.id}
              bookDetail={el}
              title="작품소개"
              contents={el.description}
            />
          );
        })}

        {bookDetail.map(el => {
          return (
            <BookIntroduction
              key={el.id}
              bookDetail={el}
              title="목차"
              contents={el.index}
            />
          );
        })}

        {bookDetail.map(el => {
          return <UserReviews key={el.id} bookDetail={el} />;
        })}

        {bookDetail.map(el => {
          return <ReviewsList key={el.id} bookDetail={el} />;
        })}
      </article>
    );
  }
}

export default Details;
