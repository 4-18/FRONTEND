import React from 'react';
import { useNavigate } from 'react-router-dom';
import './mainpagecom.scss';
import pick from "../../assets/images/pick(1).svg";
import bread from "../../assets/images/bread.svg";
import diet from "../../assets/images/diet.svg";
import drinks from "../../assets/images/drinks.svg";
import night from "../../assets/images/night.svg";
import noodle from "../../assets/images/noodle.svg";
import rice from "../../assets/images/rice.svg";
import snack from "../../assets/images/snack.svg";

export const CatePick = () => {
  const navigate = useNavigate();

  const scrollLeft = () => {
    const container = document.querySelector('.catebox');
    container.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.querySelector('.catebox');
    container.scrollBy({ left: 150, behavior: 'smooth' });
  };

  const handleImageClick = (altValue) => {
    navigate('/TypeList', { state: { category: altValue } });
  };

  return (
    <div className='StoreMainWrapper'>
      <div className='MentBox'>
        <div className='CateMent'>
          <img src={pick} alt='픽'/>
          카테고리 픽
        </div>
      </div>
      <div className="carousel-container">
        <button className="scroll-btn left" onClick={scrollLeft}>‹</button>
        <div className='catebox'>
          <img src={noodle} alt='면류' onClick={() => handleImageClick('면류')}/>
          <img src={rice} alt='밥류' onClick={() => handleImageClick('밥류')}/>
          <img src={night} alt='야식류' onClick={() => handleImageClick('야식류')}/>
          <img src={snack} alt='간식류' onClick={() => handleImageClick('간식류')}/>
          <img src={bread} alt='빵류' onClick={() => handleImageClick('빵류')}/>
          <img src={diet} alt='다이어트류' onClick={() => handleImageClick('다이어트류')}/>
          <img src={drinks} alt='음료류' onClick={() => handleImageClick('음료류')}/>
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>›</button>
      </div>
    </div>
  );
};

export default CatePick;
