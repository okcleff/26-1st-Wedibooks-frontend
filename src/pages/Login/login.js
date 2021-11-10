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

  goToLogin = e => {
    const { inputId, inputPw } = this.state;
    e.preventDefault();
    fetch('http://10.58.5.138:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        id: inputId,
        password: inputPw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('acess_token : ', result));
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
    //if (this.isId(e.target.value)) {
    this.setState({
      [name]: value,
    });
    //}
  };

  handlePwInput = e => {
    //if (this.isPw(e.target.value)) {
    this.setState({
      inputPw: e.target.value,
    });
    //}
  };

  render() {
    // let isId = this.state.inputId.length >= 6;
    // let isPw = this.state.inputPw.length >= 6;
    // console.log(this.isId(this.state.inputId));
    // console.log(this.isPw(this.state.inputPw));
    // console.log(this.isId(this.state.inputId) && this.isPw(this.state.inputPw));
    return (
      <>
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
              value={this.state.inputId}
            />
            <input
              onChange={this.handlePwInput}
              className="idPwInput inputPw"
              type="password"
              name="inputPw"
              placeholder="비밀번호"
              maxLength="10"
              value={this.state.inputPw}
            />
            <div className="checkBoxContainer">
              {/* <span>
                <label>
                  <input className="checkBox" type="checkbox" />
                  <span className="maintainLogin"> 로그인 상태 유지</span>
                </label>
                <button className="classNameButton lookingIdButton">
                  아이디 찾기
                </button>
                |<button className="classNameButton">비밀번호 재설정</button>
              </span> */}
            </div>
          </div>

          <button
            disabled={
              !(this.isId(this.state.inputId) && this.isPw(this.state.inputPw))
              //!(isId && isPw)
            }
            onClick={this.goToLogin}
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
      </>
    );
  }
}

export default Login;
