import './mainpagecom.scss';
import logo from "../../assets/images/reallogo.svg"
import map from "../../assets/images/map(1).svg"
import my from "../../assets/images/user(1).svg"
import { useNavigate } from 'react-router-dom';


export const MainHeader = () => {
  const navigate = useNavigate();
  const GoToMypage =() =>{
    navigate('/Mypage')
  }
  return (
    <div className='HeaderWrapper'>
      <img src={map} alt='지도' />
      <img className="mainlogo" src={logo} alt='로고' />
      <img src={my} alt='마이페이지' onClick={GoToMypage}/>
    </div>
  );
};

export default MainHeader;
