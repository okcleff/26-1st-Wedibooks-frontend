import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export class RecommendedBook extends Component {
  render() {
    const { recommendationList } = this.props;
    const { headDesc, detailDesc1, detailDesc2, imgSrc, name } =
      recommendationList;

    return (
      <div className="recommendedBook">
        <div className="rcmDesc">
          <p className="headDesc">{headDesc}</p>
          <p className="detailDesc">{detailDesc1}</p>
          <p className="detailDesc">{detailDesc2}</p>
        </div>
        <img className="rcmBookImg" src={imgSrc} alt={name} />
      </div>
    );
  }
}

export default RecommendedBook;
