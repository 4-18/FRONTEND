import './mainpage.scss';
import { useEffect } from 'react';
import StorePick from '../../components/MainPage/storePick';
import CatePick from '../../components/MainPage/catePick';
import MainHeader from '../../components/MainPage/header';
import Banner from '../../components/MainPage/banner';
import useAuthStore from '../../store/store';
import MainListPage from '../../components/MainPage/MainListPage';
import plus from "../../assets/images/plusre.svg";
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const navigate = useNavigate();

  const handlePlusButtonClick = () => {
    navigate('/recipe-plus');
  };


  return (
    <div className="MainPageWrapper">
      <MainHeader />
      <StorePick />
      <CatePick />
      <Banner />
      <div className='ListUp'>
        <MainListPage />
      </div>
      <img 
        className='myplusbtn' 
        src={plus} 
        alt='플러스버튼' 
        onClick={handlePlusButtonClick}
      />
    </div>
  );
};

export default MainPage;