import React, { Component } from 'react';
import UserNav from '../../components/userNav/userNav';
import './Login.scss';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      inputId: '',
      inputPw: '',
    };
  }

  submitUserInfo = e => {
    const { inputId, inputPw } = this.state;
    e.preventDefault();
    fetch('http://10.58.7.203:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        id: inputId,
        password: inputPw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'INVALID_USER') {
          alert('유효하지않은 사용자입니다.');
        } else if (result.message === 'Does_Not_Exist') {
          alert('가입하지 않은 사용자입니다.');
        } else if (result.access_token) {
          alert('로그인 성공');
          localStorage.setItem('token', result.access_token);
          console.log(result.access_token);
          this.props.history.push('/Main');
        }
      });
  };

  isId = userId => {
    const idReg = /^[A-Za-z]{1}[A-Za-z0-9]{3,}$/;

    return idReg.test(userId);
  };

  isPw = password => {
    const pwReg = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*-+_=?]).{8,}$/;

    return pwReg.test(password);
  };

  goToSignUp = () => {
    this.props.history.push('/SignUp');
  };

  handleIdInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    //}
  };

  handlePwInput = e => {
    this.setState({
      inputPw: e.target.value,
    });
  };

  render() {
    const { inputId, inputPw } = this.state;
    return (
      <div className="totalContainer">
        <UserNav />
        <form className="loginSection">
          <div className="inputIdPw">
            <input
              onChange={this.handleIdInput}
              className="idPwInput"
              type="text"
              name="inputId"
              placeholder="아이디"
              maxLength="10"
              value={inputId}
            />
            <input
              onChange={this.handlePwInput}
              className="idPwInput inputPw"
              type="password"
              name="inputPw"
              placeholder="비밀번호"
              maxLength="10"
              value={inputPw}
            />
            <div className="checkBoxContainer" />
          </div>

          <button
            disabled={!(this.isId(inputId) && this.isPw(inputPw))}
            onClick={this.submitUserInfo}
            className="loginButton buttonCommon"
          >
            로그인
          </button>
          <button
            onClick={this.goToSignUp}
            className="signUpButton buttonCommon"
          >
            회원가입
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
