import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Signupstyle.scss';
import check from "../../assets/images/ei_check.svg";

export const FinishLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.name || "회원";

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='FinishWrapper'>
      <img src={check} alt='회원가입완료' />
      <div className='finishment'>{name} 님, <br/>가입이 완료되었습니다 !</div>
    </div>
  );
};

export default FinishLogin;
