import React from 'react';
import great from '../../assets/img/great.svg';

const MainBox = ({ recipe, isUserPost }) => {
  return (
    <div className='myrecipe_wraps'>
      <div className="imgs" style={{ backgroundImage: `url(${recipe.imageUrls})` }}>
        <div className="wheres">
          {recipe.availableAt.map((store, index) => (
            <div className="locations" key={index}>
              {store}
            </div>
          ))}
        </div>
        {isUserPost && (
          <div className="edit_divs">
            <div className="edits">수정</div>
            <div className="edits">삭제</div>
          </div>
        )}
      </div>

      <p className="titles">{recipe.title}</p>
      <div className="bottoms">
        <div className="names">{recipe.userId}</div>
        <div className="greats">
          <img src={great} alt="좋아요" />
          <p className="nums">{recipe.countLikes}</p>
        </div>
      </div>
    </div>
  );
};

export default MainBox;
