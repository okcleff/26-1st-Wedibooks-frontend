import React, { Component } from 'react';
// import { faCheckSquare, faSpinner } from '@fortawesome/free-solid-svg-icons';
// import { faSquare } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome;';
import './PurchaseButton.scss';

class PurchaseButton extends Component {
  render() {
    return (
      <button className="purchaseButtons" type="button">
        {/* <i class="fasfa-heart" /> */}
        <img
          className="heart"
          alt="heart"
          src="https://www.kindpng.com/picc/m/99-996396_black-heart-png-image-heart-transparent-png.png"
        />
      </button>
    );
  }
}

export default PurchaseButton;
