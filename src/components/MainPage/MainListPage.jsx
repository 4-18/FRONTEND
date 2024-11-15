import { useState } from 'react';
import './mainpagecom.scss';
import up from "../../assets/images/up.svg";
import down from "../../assets/images/down.svg";
import MyRecipe from '../MyRecipe';

export const MainListPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sortType, setSortType] = useState('recommend');

  const dummyRecipes = Array(10).fill(null);

  const toggleHeight = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleSort = (type) => {
    setSortType(type);
  };

  return (
    <div
      className={`MainListWrapper ${isExpanded ? 'expanded' : 'collapsed'}`}
    >
      <img
        src={isExpanded ? down : up}
        alt={isExpanded ? 'down' : 'up'}
        onClick={toggleHeight}
        className="toggleImage"
      />

      {/* 추천순 / 최신순 선택 */}
      <div className="selectList">
        <div
          className={`recommend ${sortType === 'recommend' ? 'active' : ''}`}
          onClick={() => handleSort('recommend')}
        >
          추천순
          <div className="recommendLine"></div>
        </div>
        <div
          className={`new ${sortType === 'new' ? 'active' : ''}`}
          onClick={() => handleSort('new')}
        >
          최신순
          <div className="newLine"></div>
        </div>
      </div>

      {/* 레시피 리스트 */}
      <div className="recipeList">
        {dummyRecipes.map((_, index) => (
          <div key={index} className="recipeRow">
            <MyRecipe />
            <MyRecipe />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainListPage;