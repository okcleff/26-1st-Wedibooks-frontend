import React, { Component } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { RiShoppingCartFill } from 'react-icons/ri';

import './PurchaseButton.scss';

class PurchaseButton extends Component {
  render() {
    return (
      <button className="purchaseButtons" type="button">
        <RiShoppingCartFill className="fontAwesome" />
        {/* <BsHeartFill className="fontAwesome" /> */}
      </button>
    );
  }
}

export default PurchaseButton;
