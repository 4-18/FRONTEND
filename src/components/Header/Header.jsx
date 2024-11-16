// Header.jsx
import React from 'react';
import './style.scss';
import before from "../../assets/images/before.svg";
import mypageicon from "../../assets/images/mypage-icon.png";


const Header = ({ onBackClick }) => {
  return (
    <div className="header">
      <div className='BeforeBtn' onClick={onBackClick}>
        <img src={before} alt='이전 버튼' />
      </div>
      <img src={mypageicon} alt="My Page" className="mypage-icon" />
    </div>
  );
};

export default Header;