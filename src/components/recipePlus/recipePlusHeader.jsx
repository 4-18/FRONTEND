import './recipePlus.scss';
import before from "../../assets/images/before.svg"
import my from "../../assets/images/user(2).svg"

export const RecipePlusHeader = () => {
  return (
    <div className='RecipeHeaderWrapper'>
      <img src={before} alt='이전' />
      <div className='recipePlusHeader'>나만의 편슐랭</div>
      <img src={my} alt='마이페이지' />
    </div>
  );
};

export default RecipePlusHeader;
