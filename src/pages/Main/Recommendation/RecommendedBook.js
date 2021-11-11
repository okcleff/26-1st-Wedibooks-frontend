import React, { Component } from 'react';

export class RecommendedBook extends Component {
  render() {
    const {
      head_description,
      detail_description1,
      detail_description2,
      image,
      name,
      author,
      date_published,
    } = this.props.recommendationList;

    return (
      <div className="recommendedBook">
        <div className="rcmDesc">
          <p className="headDesc">{head_description}</p>
          <p className="detailDesc">{detail_description1}</p>
          <p className="detailDesc">{detail_description2}</p>
        </div>
        <div className="imgWrap">
          <img className="rcmBookImg" src={image} alt={name} />
          <div className="bookInfo">
            <p className="bookTitle">{name}</p>
            <p>{author}</p>
            <p>{date_published}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RecommendedBook;
