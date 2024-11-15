// InputID.jsx
import React, { useState } from 'react';
import './Signupstyle.scss';
import before from "../../assets/images/before.svg";
import error1 from "../../assets/images/error (1).svg";
import error from "../../assets/images/error.svg";
import pro from "../../assets/images/progress.svg";
import pro1 from "../../assets/images/progress(1).svg";

export const InputID = ({ onBack, setId, setPassword, setPasswordValid }) => {
  const [id, setLocalId] = useState("");
  const [password, setLocalPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,10}$/;
    return regex.test(password);
  };

  const handleIdChange = (event) => {
    const newId = event.target.value;
    setLocalId(newId);
    setId(newId);
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setLocalPassword(passwordValue);
    setPassword(passwordValue); // 부모 컴포넌트에 비밀번호 전달
    setPasswordValid(validatePassword(passwordValue) && passwordValue === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
    setPasswordValid(validatePassword(password) && password === confirmPasswordValue);
  };

  return (
    <>
      <div className='BeforeBtn' onClick={onBack}>
        <img src={before} alt='이전 버튼' />
      </div>
      <div className='MainWrapperName'>
        <div className='NameMent'>아이디와 비밀번호를<br />입력해주세요</div>
        <div className='ID'>
          <input
            className='NameInput'
            placeholder='아이디 입력'
            onChange={handleIdChange}
            value={id}
          />
        </div>
        <div className='Password'>
          <div className='ID'>
            <input
              className='NameInput1'
              placeholder='비밀번호 입력'
              type='password'
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div className='errorment' style={{ display: !validatePassword(password) ? 'flex' : 'none' }}>
            <img src={error1} alt='에러' />
            영문, 숫자, 특수문자를 사용하여<br />6 ~ 10자로 입력해주세요
          </div>
        </div>
        <div className='Password'>
          <div className='ID'>
            <input
              className='NameInput1'
              placeholder='비밀번호 재입력'
              type='password'
              onChange={handleConfirmPasswordChange}
              value={confirmPassword}
            />
          </div>
          <div className='realerrorment' style={{ display: password !== confirmPassword ? 'block' : 'none' }}>
            <img src={error} alt='에러' />
            비밀번호가 일치하지 않습니다.
          </div>
        </div>
        <div className='progress'>
          <img src={pro1} alt='진행률' />
          <img src={pro} alt='진행률' />
          <img src={pro1} alt='진행률' />
        </div>
      </div>
    </>
  );
};

export default InputID;
