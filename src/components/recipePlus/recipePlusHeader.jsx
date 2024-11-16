import './recipePlus.scss';
import before from "../../assets/images/before.svg"
import my from "../../assets/images/user(2).svg"
import { useNavigate } from 'react-router-dom';

export const RecipePlusHeader = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  const GoToMypage =() =>{
    navigate('/Mypage')
  }

  return (
    <div className='RecipeHeaderWrapper'>
      <img src={before} alt='이전' onClick={handleBackClick}/>
      <div className='recipePlusHeader'>나만의 편슐랭</div>
      <img src={my} alt='마이페이지' onClick={GoToMypage}/>
    </div>
  );
};

export default RecipePlusHeader;
