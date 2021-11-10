import React, { Component } from 'react';

export class InputData extends Component {
  constructor() {
    super();
    this.state = {
      isValid: false,
    };
  }
  handleInputs = event => {
    this.props.handleInputs(event);

    if (this.props.name === 'id') {
      const idReg = /^[A-Za-z]{1}[A-Za-z0-9]{3,}$/;
      idReg.test(event.target.value)
        ? this.setState({ isValid: true })
        : this.setState({ isValid: false });
    } else if (this.props.name === 'password') {
      const pwReg = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*-+_=?]).{8,}$/;
      pwReg.test(event.target.value)
        ? this.setState({ isValid: true })
        : this.setState({ isValid: false });
    } else if (this.props.name === 'pwCheck') {
      this.props.passwordConfirmed
        ? this.setState({ isValid: true })
        : this.setState({ isValid: false });
    } else if (this.props.name === 'email') {
      const pwReg =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      pwReg.test(event.target.value)
        ? this.setState({ isValid: true })
        : this.setState({ isValid: false });
    }
  };

  render() {
    const { inputType, placeholder, name, maxlength, errormessage } =
      this.props;
    console.log(this.props.passwordConfirmed);
    return (
      <div>
        <input
          name={name}
          className="inputData"
          type={inputType}
          placeholder={placeholder}
          maxlength={maxlength}
          errormessage={errormessage}
          onChange={this.handleInputs}
        />
        {this.state.isValid ? null : <span>{errormessage}</span>}
      </div>
    );
  }
}

export default InputData;
