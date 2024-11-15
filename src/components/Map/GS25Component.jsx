import React from 'react';
import './style.scss';
import gs25 from '../../assets/images/gs25.png'

const GS25Component = ({ onClick }) => (
  <div className="store-component gs25" onClick={onClick}>
    <div className="store-image"><img src={gs25} alt="GS25 이미지" /></div>
    <div className="store-text">위치보기</div>
  </div>
);

export default GS25Component;