import React, { Component } from 'react';
import DeleteButton from '../DeleteButton/DeleteButton';
import './CartBoxThirdLine.scss';

class CartBoxThirdLine extends Component {
  render() {
    const { cartList } = this.props;
    const { imgSrc, name, author, price } = cartList;

    return (
      <div className="cartBoxThirdLine">
        <input type="checkbox" className="cb2" />
        <div className="cartBookImage">
          <img className="checkBook" alt="checkBook" src={imgSrc} />
        </div>
        <div className="bookBoxContents">
          <ul className="bookTitle">
            <li className="title"> {name} </li>
            <li className="author"> {author} 저 </li>
            <li>
              <DeleteButton title="선택삭제" />
            </li>
          </ul>
        </div>
        <div className="bookPrice">{price}</div>
      </div>
    );
  }
}

export default CartBoxThirdLine;
