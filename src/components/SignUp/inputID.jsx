import React, { useState } from 'react';
import './style.scss';
import before from "../../assets/images/before.svg";
import error1 from "../../assets/images/error (1).svg";
import error from "../../assets/images/error.svg";
import pro from "../../assets/images/progress.svg";
import pro1 from "../../assets/images/progress(1).svg";

export const InputID = ({ onBack, setId, setPasswordValid }) => {
  const [id, setLocalId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleIdChange = (event) => {
    const newId = event.target.value;
    setLocalId(newId); 
    setId(newId);        
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setPasswordValid(validatePassword(passwordValue) && passwordValue === confirmPassword); 
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordValid(password === event.target.value && validatePassword(password)); 
  };

  const validatePassword = (password) => {
    return password.length >= 6 && password.length <= 10;
  };

  const handleDuplicateCheck = (e) => {
    e.preventDefault(); 
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
          <button className='idbtn' onClick={handleDuplicateCheck} disabled={id.length === 0}>
            중복 확인
          </button> 
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
          <img src={pro1} alt='진행률' />
        </div>
      </div>
    </>
  );
};

export default InputID;