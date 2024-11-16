import React, { useState, useEffect } from 'react';
import back from '../../assets/img/back_black.svg'
import plus from '../../assets/img/plus.svg'
import mypage_icon from '../../assets/img/mypage_icon.svg'
import search_icon from '../../assets/img/search_icon.svg'
import Recipe from '../../components/Recipe'
import { useNavigate, useLocation } from 'react-router-dom';
import axiosInstance from '../../api/api'; // axiosInstance 사용
import useAuthStore from '../../store/store';

const TypeList = () => {
    const [rangeValue, setRangeValue] = useState(50000);
    const [selectedOption, setSelectedOption] = useState('전체'); // select의 선택된 옵션

    const location = useLocation(); // location 객체 사용
    const categoryTitle = location.state?.category || '면류';
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
    };
    const token = useAuthStore((state) => state.token); // zustand로 토큰 가져오기

    const navigate = useNavigate();
    const GoToPlus = () =>{
        navigate('/recipe-plus')
    }
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                setLoading(true);
                let response;

                if (selectedOption === '추천순') {
                    response = await axiosInstance.get('/recommendations/popular', {
                        headers: {
                            Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
                        },
                    });
                } else if (selectedOption === '최신순') {
                    response = await axiosInstance.get('/recommendations/newest', {
                        headers: {
                            Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
                        },
                    });
                }
                else {
                    response = await axiosInstance.get(`/recommendations/category/${categoryTitle}`, {
                        headers: {
                            Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
                        },
                    });
                }

                if (response.status === 200) {
                    const filteredData = response.data.data.filter(recipe =>
                        recipe.foodTypes && recipe.foodTypes.includes(categoryTitle)
                    );
                    setRecipes(filteredData); // 필터링된 데이터 설정
                }
            } catch (error) {
                setError('레시피 데이터를 가져오는 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [categoryTitle, token, selectedOption]);

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleBackClick = () => {
        navigate(-1);
    };
    const GoToMypage = () => {
        navigate("/Mypage");
    }

    return (
        <div className='type_list_wrap'>
            <div className="top">
                <img src={back} alt="" className='back' onClick={handleBackClick} />
                <p className="title">{categoryTitle}</p>
                <img src={mypage_icon} alt="" className='mypage_icon' onClick={GoToMypage} />
            </div>
            <div className="search_div">
                <input type="text" className='input' placeholder='조합이름을 검색하세요.' />
                <img src={search_icon} alt="" />
            </div>
            <div className="title_div">
                <p className="title">오늘의 가격</p>
                <p className="price">{rangeValue}</p>
            </div>
            <div className='range'>
                <input type="range" min={0}
                    max={50000}
                    value={rangeValue}
                    onChange={handleRangeChange}
                    style={{
                        background: `linear-gradient(to right, #F55B03 0%, #F55B03 ${(rangeValue / 34000) * 100}%, #D9D9D9 ${(rangeValue / 34000) * 100}%, #D9D9D9 100%)`
                    }} />

            </div>
            <div className='select'>
                <select value={selectedOption} onChange={handleSelectChange}>
                    <option>전체</option>
                    <option>추천순</option>
                    <option>최신순</option>
                </select>
            </div>
            <div className="list_div">
                {loading ? (
                    <p>로딩 중...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <Recipe recipes={recipes} /> // Recipe 컴포넌트에 데이터 전달
                )}
            </div>
            <div className="plus" onClick={GoToPlus}>
                <img src={plus} alt="" />
            </div>
        </div>
    )
}

export default TypeList