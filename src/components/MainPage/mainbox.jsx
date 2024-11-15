import React from 'react';
import great from '../../assets/img/great.svg';
import './mainpagecom.scss';

const MainBox = ({ recipe, isUserPost }) => {
  return (
    <div className='myrecipe_wrap'>
      <div className="img" style={{ backgroundImage: `url(${recipe.imageUrls})` }}>
        <div className="where">{recipe.availableAt.join(', ')}</div>
        {isUserPost && (
          <div className="edit_div">
            <div className="edit">수정</div>
            <div className="edit">삭제</div>
          </div>
        )}
      </div>

      <p className="title">{recipe.title}</p>
      <div className="bottom">
        <div className="name">{recipe.userId}</div>
        <div className="great">
          <img src={great} alt="좋아요" />
          <p className="num">{recipe.countLikes}</p>
        </div>
      </div>
    </div>
  );
};

export default MainBox;
