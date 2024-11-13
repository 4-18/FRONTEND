import './mainpagecom.scss';
import fire from "../../assets/images/폭죽.svg"
import bigfire from "../../assets/images/폭죽(2).svg"

export const Banner = () => {
  return (
    <div className='BannerWrapper'>
      <img src={bigfire} alt='폭죽' />
      <p className='BannerMent'>
      이달의 편슐랭 3스타<p className='point'>편돌이님의 편의점 근본 마크정식</p>
      </p>
      <img src={fire} alt='폭죽' />
    </div>
  );
};

export default Banner;
