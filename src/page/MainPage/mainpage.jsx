import './mainpage.scss';
import StorePick from '../../components/MainPage/storePick';
import CatePick from '../../components/MainPage/catePick';
import MainHeader from '../../components/MainPage/header';
import Banner from '../../components/MainPage/banner';
import MainListPage from '../../components/MainPage/MainListPage';

export const MainPage = () => {
  return (
    <div className="MainPageWrapper">
      <MainHeader />
      <StorePick />
      <CatePick />
      <Banner />
      <div className='ListUp'>
        <MainListPage />
      </div>
    </div>
  );
};

export default MainPage;
