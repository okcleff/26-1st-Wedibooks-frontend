import React, { Component } from 'react';

export class RecommendedBook extends Component {
  render() {
    const { headDesc, detailDesc1, detailDesc2, imgSrc, name } =
      this.props.recommendationList;

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
