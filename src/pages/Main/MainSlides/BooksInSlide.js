import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class BooksInSlide extends Component {
  render() {
    const { misc, bookList, isIssue } = this.props;
    const { image, date_published, name, rating } = bookList;

    return (
      <div className="bookNDesc">
        <Link to="/categories">
          <img className="eachBook" src={image} alt={name} />
          <p className="bookDesc">
            {misc} {isIssue ? date_published : rating} <br />
            {name}
          </p>
        </Link>
      </div>
    );
  }
}

export default BooksInSlide;
