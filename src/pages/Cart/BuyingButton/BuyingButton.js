import React, { Component } from 'react';
import './BuyingButton.scss';

class BuyingButton extends Component {
  render() {
    return (
      <button className="buyingButton" type="button">
        {this.props.title}
      </button>
    );
  }
}

export default BuyingButton;
