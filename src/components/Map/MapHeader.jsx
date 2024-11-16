import './style.scss';
import before from "../../assets/images/before.svg"
import my from "../../assets/images/user(2).svg"

export const MapHeader = () => {
  return (
    <div className='MapHeaderWrapper'>
      <img src={before} alt='이전' />
      <div className='mapHeader'>편슐랭 지도</div>
      <img src={my} alt='마이페이지' />
    </div>
  );
};

export default MapHeader;
