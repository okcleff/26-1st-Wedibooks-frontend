import React, { Component } from 'react';
import DeleteButton from '../DeleteButton/DeleteButton';
import './CartBoxThirdLine.scss';

class CartBoxThirdLine extends Component {
  render() {
    return (
      <div className="cartBoxThirdLine">
        <input type="checkbox" className="cb2" />
        <div className="cartBookImage">
          <img
            className="book2"
            alt="book2"
            src="https://cdn.pixabay.com/photo/2015/06/22/08/39/child-817371__340.jpg"
          />
        </div>
        <div className="bookBoxContents">
          <ul className="bookTitle">
            <li className="title"> 회복탄력성 </li>
            <li className="author"> 김주환 저 </li>
            <li>
              <DeleteButton title="선택삭제" />
            </li>
          </ul>
        </div>
        <div className="bookPrice">10,360원</div>
      </div>
    );
  }
}

export default CartBoxThirdLine;
