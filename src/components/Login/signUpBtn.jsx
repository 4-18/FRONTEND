import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginstyle.scss';

export const SignUpBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup'); 
  };

  return (
    <div className='BtnMainWrapper'>
      <button className='signUpBtn' onClick={handleClick}>
        회원가입
      </button>
    </div>
  );
};

export default SignUpBtn;
