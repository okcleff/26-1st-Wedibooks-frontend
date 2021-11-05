import React, { Component } from 'react';
import './BookBorrow.scss';

class BookBorrow extends Component {
  render() {
    return (
      <button className="bookBorrow" type="button">
        {this.props.title}
      </button>
    );
  }
}

export default BookBorrow;
