import React from 'react';
import './style.scss';
import cuImage from '../../assets/images/cuImage.svg'

const CUComponent = ({ onClick }) => (
  <div className="store-component cu" onClick={onClick}>
    <div className="store-image"><img src={cuImage} alt="cu 이미지" /></div>
    <div className="store-text">위치보기</div>
  </div>
);

export default CUComponent;