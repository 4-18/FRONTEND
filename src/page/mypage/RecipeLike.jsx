import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../../assets/img/back_black.svg'
import Recipe from '../../components/Recipe'


const RecipeLike = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className='mypage_sub_wrap'>
            <div className="top">
                <img src={back} alt="" onClick={handleBackClick}/>
                <p className="title">편의점 레시피 좋아요</p>
            </div>
            <div className="contents">
                <Recipe/>
            </div>
        </div>
    )
}

export default RecipeLike