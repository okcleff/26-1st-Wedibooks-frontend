import React, { Component } from 'react';
import './CartBoxSecondLine.scss';

class CartBoxSecondLine extends Component {
  render() {
    return (
      <div className="cartBoxSecondLine">
        <input type="checkbox" className="cb1" />
        <div className="secondLineText">전체선택</div>
        <button className="itemDelete" type="button">
          선택 삭제
        </button>
      </div>
    );
  }
}
export default CartBoxSecondLine;
