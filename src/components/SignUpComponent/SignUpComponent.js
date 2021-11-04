import React from 'react';

function UserList() {
  const users = [
    {
      id: 1,
      className: 'inputId',
      type: 'text',
      name: 'id',
      placeholder: '아이디',
      maxLength: '25',
    },

    {
      id: 2,
      className: 'inputPw',
      type: 'password',
      name: 'pw',
      placeholder: '비밀번호',
      maxLength: '10',
    },

    {
      id: 3,
      className: 'inputPwCheck',
      type: 'password',
      placeholder: '비밀번호확인',
    },

    {
      id: 4,
      className: 'inputEmail',
      type: 'text',
      placeholder: '이메일 주소',
    },

    { id: 5, className: 'inputName', type: 'text', placeholder: '이름' },
  ];

  return (
    <div>
      {users.map(user => (
        <users
          key={user.id}
          className={user.className}
          type={user.type}
          name={user.name}
          placeholder={user.placeholder}
          maxLength={user.maxLength}
        />
      ))}
    </div>
  );
}

export default UserList;
