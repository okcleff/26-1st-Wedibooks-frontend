import React, { Component } from 'react';
import './BookIntroduction.scss';

class BookIntroduction extends Component {
  render() {
    return (
      <div className="bookIntroduction">
        <div className="titleList">{this.props.name}</div>
        <hr />
        <div className="text">
          {' '}
          20세기 영미 SF계의 거장인 프랭크 허버트가 죽을 때까지 작업한 이
          연대기는 총6부작으로 이루어져 있으며 우주 시대 3만 년의 인류 역사가
          담겨 있다.
        </div>
      </div>
    );
  }
}

export default BookIntroduction;
