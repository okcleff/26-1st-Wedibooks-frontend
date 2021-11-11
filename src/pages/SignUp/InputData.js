import React, { Component } from 'react';

export class InputData extends Component {
  constructor() {
    super();
    this.state = {
      isValid: false,
    };
  }
  handleInputs = event => {
    const { handleInputs } = this.props;
    const { name } = this.props.inputList;
    handleInputs(event);

    if (name === 'id') {
      const idReg = /^[A-Za-z]{1}[A-Za-z0-9]{3,}$/;
      idReg.test(event.target.value)
        ? this.setState({ isValid: true })
        : this.setState({ isValid: false });
    } else if (name === 'password') {
      const pwReg = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*-+_=?]).{8,}$/;
      pwReg.test(event.target.value)
        ? this.setState({ isValid: true })
        : this.setState({ isValid: false });
    } else if (name === 'email') {
      const pwReg =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      pwReg.test(event.target.value)
        ? this.setState({ isValid: true })
        : this.setState({ isValid: false });
    }
  };

  render() {
    const { inputList } = this.props;
    const { inputType, placeholder, name, maxlength, errormessage } = inputList;

    return (
      <div>
        <input
          name={name}
          className="inputData"
          type={inputType}
          placeholder={placeholder}
          maxlength={maxlength}
          onChange={this.handleInputs}
        />
        {!this.state.isValid && (
          <span className="errorMessage">{errormessage}</span>
        )}
      </div>
    );
  }
}

export default InputData;
