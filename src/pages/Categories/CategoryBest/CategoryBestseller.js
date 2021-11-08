import React, { Component } from 'react';
import './CategoryBestseller.scss';

export class CategoryBestseller extends Component {
  render() {
    const { bestsellerList } = this.props;
    const { imgSrc, name, author, id } = bestsellerList;

    return (
      <div className="categoryBestseller">
        <div className="numbering">{id}</div>
        <img src={imgSrc} alt={name} className="bookImg" />
        <div className="bookName">{name}</div>
        <div className="authorName">{author}</div>
      </div>
    );
  }
}

export default CategoryBestseller;
