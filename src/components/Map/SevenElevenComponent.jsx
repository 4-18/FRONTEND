import React from 'react';
import './style.scss';
import seveneleven from '../../assets/images/seveneleven.png'

const SevenElevenComponent = ({ onClick }) => (
  <div className="store-component seven-eleven" onClick={onClick}>
        <div className="store-image"><img src={seveneleven} alt="7-11 이미지" /></div>
    <div className="store-text">위치보기</div>
  </div>
);

export default SevenElevenComponent;