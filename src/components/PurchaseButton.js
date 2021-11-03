import React, { Component } from 'react';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PurchaseButton.scss';

class PurchaseButton extends Component {
  render() {
    return (
      <button className="purchaseButtons" type="button">
        <FontAwesomeIcon icon={faCartPlus} class="fontAwesome" size="2x" />
        {/* <img className="heart" alt="heart" src="../../images/JYB/like.png" /> */}
      </button>
    );
  }
}

export default PurchaseButton;
