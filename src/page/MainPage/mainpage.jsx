import './mainpage.scss';
import { useEffect } from 'react'; // useEffect import
import StorePick from '../../components/MainPage/storePick';
import CatePick from '../../components/MainPage/catePick';
import MainHeader from '../../components/MainPage/header';
import Banner from '../../components/MainPage/banner';
import useAuthStore from '../../store/store';

export const MainPage = () => {
  const checkToken = () => {
    const token = useAuthStore.getState().token;
    console.log('저장된 토큰:', token);
  };
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <div className='MainPageWrapper'>
      < MainHeader />
      < StorePick />
      < CatePick />
      < Banner />
    </div>
  );
};

export default MainPage;