import "./recipePlusPage.scss"
import RecipePlusHeader from '../../components/recipePlus/recipePlusHeader';
import RecipePlusItems from "../../components/recipePlus/recipePlusItems";

export const RecipePlusPage = () => {
  return (
    <div className='RecipePlusWrapper'>
      < RecipePlusHeader />
      < RecipePlusItems />
    </div>
  );
};

export default RecipePlusPage;