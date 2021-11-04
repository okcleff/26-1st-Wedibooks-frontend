import React, { Component } from 'react';
import UserNav from '../../components/userNav/userNav';
import './login.scss';

export class Login extends Component {
  render() {
    return (
      <>
        <UserNav />
        <section className="loginSection">
          <div className="inputIdPw">
            <input
              className="idPwInput"
              type="text"
              name="id"
              placeholder="아이디"
              maxLength="10"
            />
            <input
              className="idPwInput inputPw"
              type="password"
              name="pw"
              placeholder="비밀번호"
              maxLength="10"
            />
            <div className="checkBoxContainer">
              <span>
                <label>
                  <input className="checkBox" type="checkbox" />
                  <span className="maintainLogin"> 로그인 상태 유지</span>
                </label>
                <button className="classNameButton lookingIdButton">
                  아이디 찾기
                </button>
                |<button className="classNameButton">비밀번호 재설정</button>
              </span>
            </div>
          </div>

          <button className="loginButton buttonCommon"> 로그인</button>
          <button className="signUpButton buttonCommon">회원가입</button>
        </section>
      </>
    );
  }
}

export default Login;
