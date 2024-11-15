import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../../assets/img/back_black.svg'
import Product from '../../components/Product'


const ProductLike = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className='mypage_sub_wrap'>
            <div className="top">
                <img src={back} alt="" onClick={handleBackClick}/>
                <p className="title">편의점 상품 좋아요</p>
            </div>
            <div className="contents">
                <Product/>
            </div>
        </div>
    )
}

export default ProductLike