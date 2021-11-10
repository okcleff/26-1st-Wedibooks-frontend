import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CartBox.scss';

export class CartData extends Component {
  render() {
    const { cartList } = this.props;
    const { imgSrc, name, author, price } = cartList;

    return (
      <div className="CartData">
        <Link to="/detail">
          <img src={imgSrc} alt={name} className="bookImg" />
          <div className="bookName">{name}</div>
          <div className="authorName">{author}</div>
          <div className="bookPrice">{price}</div>
        </Link>
      </div>
    );
  }
}

export default CartData;
