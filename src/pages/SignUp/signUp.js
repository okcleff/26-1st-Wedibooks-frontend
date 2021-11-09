import React, { Component } from 'react';
import UserNav from '../../components/userNav/userNav';
import InputData from './InputData';
import './SignUp.scss';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      inputList: [],
      id: '',
      password: '',
      pwCheck: '',
      email: '',
      userName: '',
      birth: '',
      gender: '',
    };
  }

  goToMain = e => {
    const { id, password, userName, email, birth, gender } = this.state;
    fetch('http://10.58.5.138:8000/users/signup', {
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
      .then(data => console.log(data));
  };

  componentDidMount() {
    fetch('./data/inputList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          inputList: data,
        });
      });
  }

  // isId = userId => {
  //   const idReg = /^[A-Za-z]{1}[A-Za-z0-9]{3,}$/;

  //   return idReg.test(userId);
  // };

  // isPw = password => {
  //   const pwReg = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*-+_=?]).{8,}$/;

  //   return pwReg.test(password);
  // };

  handleInputs = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    // this.isValidID();
    this.isValidPW();
    this.isValidPwSame();
    this.isValidEmail();
  };

  // isValidID = () => {
  //   const stateId = this.state.id;
  //   const idReg = /^[A-Za-z]{1}[A-Za-z0-9]{3,}$/;
  //   const afterTest = idReg.test(stateId);

  //   if (afterTest === false) {
  //     console.log('id', afterTest);
  //   } else {
  //     console.log('id : true', afterTest);
  //   }
  // };

  isValidPW = () => {
    const statePw = this.state.password;
    const pwReg = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*-+_=?]).{8,}$/;
    const afterTest = pwReg.test(statePw);

    if (afterTest === false) {
      console.log('pw', afterTest);
    } else {
      console.log('pw : true', afterTest);
    }
  };

  isValidPwSame = () => {
    const statepwCheck = this.state.pwCheck;
    const statePw = this.state.password;

    if (statepwCheck === statePw) {
      console.log('same true');
    } else {
      console.log('not same false');
    }
  };

  isValidEmail = () => {
    const stateEmail = this.state.email;
    const emailReg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const afterTest = emailReg.test(stateEmail);

    if (afterTest === false) {
      console.log('email : true', afterTest);
    } else {
      console.log('email : false', afterTest);
    }
  };
  pushMan = () => {
    this.setState({
      gender: '1',
    });
  };

  pushWoman = () => {
    this.setState({
      gender: '2',
    });
  };

  render() {
    const { inputList } = this.state;
    const idReg = /^[A-Za-z]{1}[A-Za-z0-9]{3,}$/;
    const isVaildID = idReg.test(this.state.id);

    console.log("Hey! I'm " + isVaildID);

    return (
      <div className="totalContainer">
        <UserNav />
        <div className="signUpBody">
          <section className="signUpSection">
            {inputList.map(inputList => {
              return (
                <InputData
                  key={inputList.id}
                  name={inputList.name}
                  inputType={inputList.inputType}
                  placeholder={inputList.placeholder}
                  maxlength={inputList.maxLength}
                  errormessage={inputList.errormessage}
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
                <button onClick={this.pushMan} className="buttonMaleFemale">
                  남
                </button>
                <button onClick={this.pushWoman} className="buttonMaleFemale">
                  여
                </button>
              </span>
            </div>
            <button onClick={this.goToMain} className="signInbutton">
              회원 가입 완료
            </button>
          </section>
        </div>
      </div>
    );
  }
}

export default SignUp;
