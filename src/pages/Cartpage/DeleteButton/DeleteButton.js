import React, { Component } from 'react';
import './DeleteButton.scss';

class DeleteButton extends Component {
  render() {
    return (
      <button className="deleteButton" type="button">
        {this.props.title}
      </button>
    );
  }
}

export default DeleteButton;
