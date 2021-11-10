import React, { Component } from 'react';
import DeleteButton from '../DeleteButton/DeleteButton';
import './CartBoxSecondLine.scss';

class CartBoxSecondLine extends Component {
  render() {
    return (
      <div className="cartBoxSecondLine">
        <input type="checkbox" className="cb1" />
        <div className="secondLineText">전체선택</div>
        <DeleteButton title="전체삭제" />
      </div>
    );
  }
}
export default CartBoxSecondLine;
