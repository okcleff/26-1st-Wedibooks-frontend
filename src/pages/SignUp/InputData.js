import React, { Component } from 'react';

export class InputData extends Component {
  render() {
    const { inputType, placeholder } = this.props;
    return (
      <div>
        <input type={inputType} placeholder={placeholder} />{' '}
      </div>
    );
  }
}

export default InputData;
