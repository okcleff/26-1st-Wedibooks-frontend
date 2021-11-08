import React, { Component } from 'react';

export class InputData extends Component {
  inputHandle = e => {
    const { handleInputs } = this.props;
    handleInputs(e);
  };

  render() {
    const { inputType, placeholder, name } = this.props;
    return (
      <div>
        <input
          name={name}
          className="inputData"
          type={inputType}
          placeholder={placeholder}
          onChange={this.inputHandle}
        />
      </div>
    );
  }
}

export default InputData;
