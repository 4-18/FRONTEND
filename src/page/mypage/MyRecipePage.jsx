import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../../assets/img/back_black.svg'
import MyRecipe from '../../components/MyRecipe'


const MyRecipePage = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className='mypage_sub_wrap'>
            <div className="top">
                <img src={back} alt="" onClick={handleBackClick}/>
                <p className="title">내가 쓴 편의점 레시피</p>
            </div>
            <div className="contents">
                <MyRecipe/>
            </div>
        </div>
    )
}

export default MyRecipePage