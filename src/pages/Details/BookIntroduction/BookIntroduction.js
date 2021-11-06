import React, { Component } from 'react';
import './BookIntroduction.scss';

class BookIntroduction extends Component {
  render() {
    return (
      <div className="bookIntroduction">
        <div className="titleList">{this.props.title}</div>
        <div className="line" />
        <div className="text">{this.props.contents}</div>
      </div>
    );
  }
}

export default BookIntroduction;
