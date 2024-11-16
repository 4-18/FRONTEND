import './style.scss';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가

import before from "../../assets/images/before.svg"
import my from "../../assets/images/user(2).svg"

export const MapHeader = () => {
  const navigate = useNavigate(); // navigate 함수 사용

  const handleBackClick=()=>{
    navigate(-1);
  }

  const GoToMypage =()=>{
    navigate('/Mypage');
  }
  return (
    <div className='DetailHeaderWrapper'>
      <img src={before} alt='이전' onClick={handleBackClick}/>
      <div className='detailHeader'>편의점 이미지</div>
      <img src={my} alt='마이페이지' onClick={GoToMypage}/>
    </div>
  );
};

export default MapHeader;
