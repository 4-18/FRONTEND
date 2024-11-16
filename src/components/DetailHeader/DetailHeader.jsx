import './style.scss';
import before from "../../assets/images/before.svg"
import my from "../../assets/images/user(2).svg"

export const MapHeader = () => {
  return (
    <div className='DetailHeaderWrapper'>
      <img src={before} alt='이전' />
      <div className='detailHeader'>편의점 이미지</div>
      <img src={my} alt='마이페이지' />
    </div>
  );
};

export default MapHeader;
