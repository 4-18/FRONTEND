import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import great from '../assets/img/great.svg'
import DeletePopup from '../components/MainPage/DeletePopup'

const MyRecipe = ({ myrecipes }) => {
  const navigate = useNavigate(); // navigate 함수 사용
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleEditClick = (id) => {
    navigate(`/MyRecipeChangePage/${id}`); // id를 URL에 추가하여 페이지 이동
  };
  const handleDeleteClick = (id) => {
    setSelectedRecipeId(id);
    setShowPopup(true);
};

const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedRecipeId(null);
};

const handleConfirmDelete = () => {
    // 여기에 삭제 로직 추가
    console.log(`Recipe with ID ${selectedRecipeId} deleted`);
    handleClosePopup();
};

  return (
    <div className='recipe_list_wrap'>
      {myrecipes && myrecipes.length > 0 ? (
        myrecipes.map((recipe) => (
          <div key={recipe.id} className='myrecipe_wrap'>
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
              )}
              <div className="edit_div">
                <div className="edit" onClick={() => handleEditClick(recipe.id)}>수정</div>
                <div className="edit" onClick={() => handleDeleteClick(recipe.id)}>삭제</div>
              </div>
            </div>

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
        <p>내가 쓴 레시피가 없습니다.</p> // 데이터가 없을 때 표시할 내용
      )}
      {showPopup && (
                <DeletePopup
                    onClose={handleClosePopup}
                    onConfirm={handleConfirmDelete}
                />
            )}
    </div>
  );

}

export default MyRecipe