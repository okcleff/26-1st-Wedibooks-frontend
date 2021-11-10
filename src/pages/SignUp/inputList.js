const INPUT_LIST = [
  {
    id: 1,
    className: 'inputId',
    inputType: 'text',
    name: 'id',
    placeholder: '아이디 (4자 이상, 영문)',
    maxLength: '10',
    errormessage: '영문으로 4자 이상 입력하세요',
  },

  {
    id: 2,
    className: 'inputPw',
    inputType: 'password',
    name: 'password',
    placeholder: '비밀번호 (8자 이상, 영문, 숫자, 특수문자)',
    maxLength: '15',
    errormessage: '영문, 숫자와 특수문자를 넣어서 8자 이상 넣어주세요',
  },

  {
    id: 3,
    className: 'inputPwCheck',
    inputType: 'password',
    name: 'pwCheck',
    placeholder: '비밀번호 확인',
    errormessage: '비밀번호가 다릅니다',
  },

  {
    id: 4,
    className: 'inputEmail',
    inputType: 'text',
    name: 'email',
    placeholder: '이메일 주소',
    errormessage: "@와 '.' 을 포함해서 작성해주세요",
  },

  {
    id: 5,
    className: 'inputName',
    inputType: 'text',
    name: 'userName',
    placeholder: '이름',
  },
];

export default INPUT_LIST;
