import './mainpagecom.scss';
import gs from "../../assets/images/gs25(1).svg"
import cu from "../../assets/images/CU(1).svg"
import seven from "../../assets/images/7.svg"
import pick from "../../assets/images/pick(1).svg"
import { useNavigate } from 'react-router-dom';


export const StorePick = () => {
  const navigate = useNavigate();
  const GoToGS = () => {
    navigate('/StoreListGS');
  }
  const GoToCU = () => {
    navigate('/StoreListCU');
  }
  const GoTo7 = () => {
    navigate('/StoreList7');
  }
  return (
    <div className='StoreMainWrapper'>
      <div className='MentBox'>
      <div className='StoreMent'>
        <img src={pick} alt='픽'/>
        편의점 픽
      </div>
      </div>
      <div className='imgGroup'>
        <img className='one' src={gs} alt="gs" onClick={GoToGS}/>
        <div className='bar'></div>
        <img className='two'src={cu} alt="cu" onClick={GoToCU}/>
        <div className='bar'></div>
        <img className='three'src={seven} alt="seven" onClick={GoTo7}/>
      </div>
    </div>
  );
};

export default StorePick;
