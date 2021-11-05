import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class BestBook extends Component {
  render() {
    const { imgSrc, name, rating } = this.props.bestsellerList;

    return (
      <div className="bookNDesc">
        <Link to="/categories">
          <img className="eachBook" src={imgSrc} alt="child" />
          <p className="bookDesc">
            평점: {rating} <br />
            {name}
          </p>
        </Link>
      </div>
    );
  }
}

export default BestBook;
