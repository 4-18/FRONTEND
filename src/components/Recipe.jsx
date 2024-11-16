import React from 'react'
import { useNavigate } from 'react-router-dom';
import great from '../assets/img/great.svg'


const Recipe = ({ recipes }) => {
  const navigate = useNavigate(); // navigate 함수 사용
  const handleDetailClick = (id) => {
    navigate(`/recipe-detail/${id}`); // id를 URL에 추가하여 페이지 이동
  };

  return (
    <div className='recipe_list_wrap'>
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id} className='recipe_wrap' onClick={() => handleDetailClick(recipe.id)}>
            <div
              className="img"
              style={{
                backgroundImage: `url(${recipe.imageUrls})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {recipe.availableAt && recipe.availableAt.length <= 2 ? (
                recipe.availableAt.map((location, index) => (
                  <div key={index} className="where">{location}</div> // 2개 이하일 경우 각각 div로 표시
                ))
              ) : (
                <div className="where">ALL</div> // 3개 이상일 경우 "ALL"로 표시
              )}            </div>

            <p className="title">{recipe.title}</p>
            <div className="bottom">
              <div className="name">{recipe.userId ? `작성자: ${recipe.userId}` : '작성자 정보 없음'}</div>
              <div className="great">
                <img src={great} alt="좋아요" />
                <p className="num">{recipe.countLikes ?? 0}</p> {/* 좋아요 수 렌더링 */}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>레시피가 없습니다.</p> // 데이터가 없을 때 표시할 내용
      )}
    </div>
  );
}

export default Recipe