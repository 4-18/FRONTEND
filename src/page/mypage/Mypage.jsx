import React from 'react'
import back from '../../assets/img/back.svg'
import next from '../../assets/img/next.svg'
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const navigate = useNavigate();

  const goToMyRecipe = () => {
    navigate("/MyRecipePage");
  }
  const goToProductLike = () => {
    navigate("/ProductLike");
  }
  const goToRecipeLike = () => {
    navigate("/RecipeLike");
  }
  const goToRecipeSave = () => {
    navigate("/RecipeSave");
  }
  const handleBackClick = () => {
    navigate(-1);
};

  return (
    <div className='mypage_wrap'>
      <div className="top">
        <div className="left">
          <img src={back} alt="" className='back' onClick={handleBackClick}/>
          <div className="text">
            <div className="text_top">
              <p className="name">민달팽이</p>
              <p className="txt">님의</p>
            </div>
            <p className="txt">마이페이지</p>
          </div>
        </div>
        <div className="logout">로그아웃</div>
      </div>
      <p className="question">당신에게 편의점이란?</p>
      <p className="answer">잠깐의 휴식을 주는 소중한 밥집</p>
      <div className="pages">
        <div className="page" onClick={goToProductLike}>
          <div className="top">
            <p className="title">편의점 상품<br />좋아요</p>
            <img src={next} alt="" />
          </div>
          <p className="num">0</p>
        </div>
        <div className="page" onClick={goToRecipeLike}>
          <div className="top">
            <p className="title">편의점 레시피<br />좋아요</p>
            <img src={next} alt="" />
          </div>
          <p className="num">12</p>
        </div>
        <div className="page" onClick={goToRecipeSave}>
          <div className="top">
            <p className="title">편의점 레시피<br />스크랩</p>
            <img src={next} alt="" />
          </div>
          <p className="num">234</p>
        </div>
        <div className="page" onClick={goToMyRecipe}>
          <div className="top">
            <p className="title">내가 쓴 글</p>
            <img src={next} alt="" />
          </div>
          <p className="num">32</p>
        </div>
      </div>
    </div>
  )
}

export default Mypage