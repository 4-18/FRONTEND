import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Introstyle.scss'; 
import Logo from "../../assets/images/reallogo.svg";

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="MainWrapper">
    <div className="IntroMainWrapper">
      <img src={Logo} alt="로고" />
    </div>
    </div>
  );
};

export default Intro;