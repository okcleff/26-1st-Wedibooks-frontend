import React, { Component } from 'react';
import './signUp.scss';

export class signUp extends Component {
  render() {
    return (
      <div className="signIn">
        <header className="signInHeader">
          <a href="/" className="logo">
            RIDIBOOKS
          </a>
        </header>
        <body className="signInBody">
          <section className="signInSection">
            <input
              className="inputId"
              type="text"
              name="id"
              placeholder="아이디"
              maxLength="25"
            />
            <input
              className="inputPw"
              type="password"
              name="pw"
              placeholder="비밀번호"
              maxLength="10"
            />
            <input
              className="inputPwCheck"
              type="password"
              placeholder="비밀번호 확인"
            />
            <input
              className="inputEmail"
              type="text"
              placeholder="이메일 주소"
            />
            <input className="inputName" type="text" placeholder="이름" />
            <p className="choosePtag">선택 입력</p>
            <div className="birthYearSex">
              <input
                className="inputBirthYear"
                type="text"
                placeholder="출생년도"
              />
              <span className="MenWomen">
                <button className="buttonMale">남</button>
                <button className="buttonFemale">여</button>
              </span>
            </div>
            <button className="signInbutton">회원 가입 완료</button>
          </section>
        </body>
      </div>
    );
  }
}

export default signUp;
