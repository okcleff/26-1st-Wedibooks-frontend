import React, { Component } from 'react';
import './BookIntroduction.scss';

class BookIntroduction extends Component {
  render() {
    const { title, contents } = this.props;
    return (
      <div className="bookIntroduction">
        <div className="titleList">{title}</div>
        <div className="line" />
        <div className="text">{contents}</div>
      </div>
    );
  }
}

export default BookIntroduction;
