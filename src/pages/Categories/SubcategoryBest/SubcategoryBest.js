import React, { Component } from 'react';
import { withRouter } from 'react-router';

export class SubcategoryBest extends Component {
  render() {
    const { imgSrc, name, subcategory, id } = this.props.list;
    return (
      <div
        className="subcategoryBest"
        onClick={() => {
          this.props.history.push(`/details/${id}`);
        }}
      >
        <div className="numbering">{id}</div>
        <img src={imgSrc} alt={name} className="bookImg" />
        <div className="bookName">{name}</div>
        <div className="authorName">{subcategory}</div>
      </div>
    );
  }
}

export default withRouter(SubcategoryBest);
