import React, { Component } from 'react';
import { withRouter } from 'react-router';

export class SubcategoryBest extends Component {
  render() {
    const { name, author, image } = this.props.list;
    return (
      <div
        className="subcategoryBest"
        // onClick={() => {
        //   this.props.history.push(`/details/${id}`);
        // }}
      >
        <div className="numbering">1</div>
        <img src={image} alt={name} className="bookImg" />
        <div className="bookName">{name}</div>
        <div className="authorName">{author}</div>
      </div>
    );
  }
}

export default withRouter(SubcategoryBest);
