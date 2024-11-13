import './mainpage.scss';
import StorePick from '../../components/MainPage/storePick';
import CatePick from '../../components/MainPage/catePick';
import MainHeader from '../../components/MainPage/header';
import Banner from '../../components/MainPage/banner';

export const MainPage = () => {
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