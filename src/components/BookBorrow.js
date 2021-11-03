import React, { Component } from 'react';
import './BookBorrow.scss';

class BookBorrow extends Component {
  render() {
    return (
      <button className="bookBorrow" type="button">
        대여하기
      </button>
    );
  }
}

export default BookBorrow;
