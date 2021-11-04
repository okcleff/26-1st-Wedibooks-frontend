import React, { Component } from 'react';

export class InputData extends Component {
  render() {
    const { inputType, placeholder } = this.props;
    return (
      <div>
        <input
          className="inputData"
          type={inputType}
          placeholder={placeholder}
        />{' '}
      </div>
    );
  }
}

export default InputData;
