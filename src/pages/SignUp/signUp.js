import React, { Component } from 'react';
import UserNav from '../../components/userNav/userNav';
import InputData from './InputData';
import INPUT_LIST from './inputList';
import './SignUp.scss';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
      email: '',
      userName: '',
      birth: '',
      gender: '',
    };
  }

  submitUserInfoToSignUp = e => {
    const { id, password, userName, email, birth, gender } = this.state;
    fetch('http://10.58.7.203:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        name: userName,
        password: password,
        email: email,
        yearOfBirth: birth,
        gender: gender,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Id format is not valid') {
          alert('유효하지않은 아이디입니다.');
        } else if (data.message === 'Password_Validation_Error') {
          alert('유효하지 않은 비밀번호입니다.');
        } else if (data.message === 'Email format is not valid') {
          alert('유효하지 않은 이메일입니다.');
        } else if (data.message === 'ID_Exist_Error') {
          alert('이미 등록된 아이디입니다.');
        } else if (data.message === 'Email.Exist_Error') {
          alert('이미 등록된 이메일입니다.');
        } else if (data.message === 'SUCCESS') {
          alert('회원가입 성공');
          this.props.history.push('/Login');
        }
      });
  };

  handleInputs = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  pushGender = e => {
    const { name } = e.target;
    this.setState({
      gender: name === 'male' ? 1 : 2,
    });
  };

  render() {
    const { pwCheck, password } = this.state;
    const passwordConfirmed = pwCheck === password;
    return (
      <div className="totalContainerSignUp">
        <div className="signUpBody">
          <section className="signUpSection">
            {INPUT_LIST.map(inputList => {
              return (
                <InputData
                  key={inputList.id}
                  inputList={inputList}
                  passwordConfirmed={passwordConfirmed}
                  handleInputs={this.handleInputs}
                />
              );
            })}
            <p className="choosePtag">선택 입력</p>
            <div className="birthYearSex">
              <input
                className="inputBirthYear"
                type="text"
                name="birth"
                placeholder="출생년도"
                onChange={this.handleInputs}
              />
              <span className="MenWomen">
                <button
                  name="male"
                  onClick={this.pushGender}
                  className="buttonMaleFemale"
                >
                  남
                </button>
                <button
                  name="female"
                  onClick={this.pushGender}
                  className="buttonMaleFemale"
                >
                  여
                </button>
              </span>
            </div>
            <button
              onClick={this.submitUserInfoToSignUp}
              className="signInbutton"
            >
              회원 가입 완료
            </button>
          </section>
        </div>
      </div>
    );
  }
}

export default SignUp;
