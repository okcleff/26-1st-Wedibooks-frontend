import React, { Component } from 'react';
import NavLoginSignup from '../../components/NavLoginSignUp/NavLoginSignup';
import './login.scss';

export class login extends Component {
  render() {
    return (
      <>
        <NavLoginSignup />

        <section className="loginSection">
          <div className="inputIdPw">
            <div className="inputIdContainer">
              <input
                className="inputId"
                type="text"
                name="id"
                placeholder="아이디"
                maxLength="10"
              />
            </div>
            <div className="inputPwContainer">
              <input
                className="inputPw"
                type="password"
                name="pw"
                placeholder="비밀번호"
                maxLength="10"
              />
            </div>
            <div className="checkBoxContainer">
              <span>
                <label>
                  <input className="checkBox" type="checkbox" />
                  <span className="maintainLogin"> 로그인 상태 유지</span>
                </label>
                <button className="lookingIdButton">아이디 찾기</button>|
                <button className="resetPwButton">비밀번호 재설정</button>
              </span>
            </div>
          </div>

          <button className="loginButton"> 로그인</button>
          <button className="signUpButton">회원가입</button>
        </section>
      </>
    );
  }
}

export default login;
