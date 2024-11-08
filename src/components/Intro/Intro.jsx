import React from 'react';
import './style.scss'; 
import Logo from "../../assets/images/reallogo.svg"

const Intro = () => {
  return (
    <div class="MainWrapper">
        <img src={Logo} alt= "로고" />
    </div>
  );
};

export default Intro;
