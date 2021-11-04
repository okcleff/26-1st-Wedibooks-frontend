import React, { Component } from 'react';
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
          <ul class="bookTitle">
            <li> 회복탄력성 </li>
            <li> 김주환 저 </li>
            <li>
              {' '}
              <button className="itemDelete" type="button">
                선택 삭제
              </button>
            </li>
          </ul>
        </div>
        <div className="bookPrice">10,360원</div>
      </div>
    );
  }
}

export default CartBoxThirdLine;
