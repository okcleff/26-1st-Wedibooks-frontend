import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class BooksInSlide extends Component {
  render() {
    const { misc, bookList, isIssue } = this.props;
    const { imgSrc, issueDate, name, rating } = bookList;

    return (
      <div className="bookNDesc">
        <Link to="/categories">
          <img className="eachBook" src={imgSrc} alt={name} />
          <p className="bookDesc">
            {misc} {isIssue ? issueDate : rating} <br />
            {name}
          </p>
        </Link>
      </div>
    );
  }
}

export default BooksInSlide;
