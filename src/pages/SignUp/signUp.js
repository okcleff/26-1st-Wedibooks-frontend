import React, { Component } from 'react';
import UserNav from '../../components/userNav/userNav';
import InputData from './InputData';
import './signUp.scss';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      inputList: [],
    };
  }

  componentDidMount() {
    fetch('./data/inputList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          inputList: data,
        });
      });
  }

  render() {
    const { inputList } = this.state;
    return (
      <>
        <UserNav />
        <div className="signInBody">
          <section className="signInSection">
            {inputList.map(inputList => {
              return (
                <InputData
                  key={inputList.id}
                  inputType={inputList.inputType}
                  placeholder={inputList.placeholder}
                />
              );
            })}
            <p className="choosePtag">선택 입력</p>
            <div className="birthYearSex">
              <input
                className="inputBirthYear"
                type="text"
                placeholder="출생년도"
              />
              <span className="MenWomen">
                <button className="buttonMaleFemale">남</button>
                <button className="buttonMaleFemale">여</button>
              </span>
            </div>
            <button className="signInbutton">회원 가입 완료</button>
          </section>
        </div>
      </>
    );
  }
}

export default SignUp;
