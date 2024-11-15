import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/api'; // axiosInstance 사용
import useAuthStore from '../../store/store'; // zustand 상태 관리
import back from '../../assets/img/back_black.svg'
import Recipe from '../../components/Recipe'

const RecipeSave = () => {
    const [likedRecipes, setlikedRecipes] = useState([]); // 좋아요 누른 상품 상태
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = useAuthStore((state) => state.token);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLikedProducts = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get('/products/liked', {
                    headers: {
                        Authorization: `Bearer ${token}`, // 토큰이 있으면 헤더에 추가
                    },
                });

                if (response.status === 200) {
                    setlikedRecipes(response.data.data); // 데이터 설정
                }
            } catch (error) {
                setError('좋아요 상품 데이터를 가져오는 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchLikedProducts();
    }, [token]);

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className='mypage_sub_wrap'>
            <div className="top">
                <img src={back} alt="" onClick={handleBackClick}/>
                <p className="title">편의점 레시피 스크랩</p>
            </div>
            <div className="contents">
            {loading ? (
                    <p>로딩 중...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <Recipe Recipes={likedRecipes} /> // Product 컴포넌트에 데이터 전달
                )}
            </div>

        </div>
    )
}

export default RecipeSave