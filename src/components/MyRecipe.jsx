import React from 'react'
import great from '../assets/img/great.svg'


const MyRecipe = () => {
  return (
    <div className='myrecipe_wrap'>

      <div className="img">
        <div className="where">ALL</div>
        <div className="edit_div">
            <div className="edit">수정</div>
            <div className="edit">삭제</div>
        </div>
      </div>

      <p className="title">편의점 근본 마크정식</p>
      <div className="bottom">
        <div className="name">편돌이</div>
        <div className="great">
          <img src={great} alt="" />
          <p className="num">58</p>
        </div>
      </div>
    </div>
  )
}

export default MyRecipe