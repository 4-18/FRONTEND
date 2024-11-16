import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../../assets/img/back_black.svg'
import seven from '../../assets/img/seven_icon.svg'
import plus from '../../assets/img/plus.svg'
import mypage_icon from '../../assets/img/mypage_icon.svg'
import search_icon from '../../assets/img/search_icon.svg'
import Product from '../../components/Product'
import axiosInstance from '../../api/api'; // axiosInstance를 사용
import useAuthStore from '../../store/store'; // zustand 상태 관리 불러오기
import Recipe from '../../components/Recipe';

const StoreList7 = () => {
    const [rangeValue, setRangeValue] = useState(34000);
    const [isProductView, setIsProductView] = useState(true);
    const [SevenProducts, setSevenProducts] = useState([]); // 필터링된 상품 상태
    const [recipes, setRecipes] = useState([]); // 레시피 데이터를 저장하는 상태
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedOption, setSelectedOption] = useState('전체'); // select의 선택된 옵션
    const [selectedCategory, setSelectedCategory] = useState(''); // 선택된 카테고리

    const token = useAuthStore((state) => state.token); // zustand로 토큰 가져오기
    const navigate = useNavigate();
    const categories = ['면류', '밥류', '간식류', '음료류', '다이어트류'];

    const GoToPlus = () =>{
        navigate('/recipe-plus')
    }
    // 전체 데이터를 가져오는 함수
    const fetchAllProducts = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get('/products/convenience/Seven', {
                headers: {
                    Authorization: `Bearer ${token}`, // 토큰이 있으면 헤더에 추가
                },
            });

            if (response.status === 200) {
                setSevenProducts(response.data.data); // 초기에는 모든 데이터를 필터링 상태에 설정
            }
        } catch (error) {
            setError('전체 데이터를 가져오는 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    // 추천순 데이터를 가져오는 함수
    const fetchRecommendedProducts = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get('/products/popular', {
                headers: {
                    Authorization: `Bearer ${token}`, // 토큰이 있으면 헤더에 추가
                },
            });

            if (response.status === 200) {
                // availableAt에 'Seven'가 포함된 데이터만 필터링
                const filtered = response.data.data.filter(product => product.availableAt.includes('Seven'));
                setSevenProducts(filtered);
            }
        } catch (error) {
            setError('추천순 데이터를 가져오는 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };
    // 최신순 데이터를 가져오는 함수
    const fetchNewProducts = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get('/products/newest', {
                headers: {
                    Authorization: `Bearer ${token}`, // 토큰이 있으면 헤더에 추가
                },
            });

            if (response.status === 200) {
                // availableAt에 'Seven'가 포함된 데이터만 필터링
                const filtered = response.data.data.filter(product => product.availableAt.includes('Seven'));
                setSevenProducts(filtered);
            }
        } catch (error) {
            setError('최신순 데이터를 가져오는 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    // 레시피 전체 데이터를 가져오는 함수
    const fetchAllRecipes = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get('/recommendations/convenience/Seven', {
                headers: {
                    Authorization: `Bearer ${token}`, // 토큰이 있으면 헤더에 추가
                },
            });

            if (response.status === 200) {
                setRecipes(response.data.data); // 초기에는 모든 데이터를 설정
            }
        } catch (error) {
            setError('레시피 데이터를 가져오는 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    // 추천순 레시피 데이터를 가져오는 함수
    const fetchRecommendedRecipes = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get('/recommendations/popular', {
                headers: {
                    Authorization: `Bearer ${token}`, // 토큰이 있으면 헤더에 추가
                },
            });

            if (response.status === 200) {
                const filtered = response.data.data.filter(product => product.availableAt.includes('Seven'));
                setRecipes(filtered);
            }
        } catch (error) {
            setError('추천순 레시피 데이터를 가져오는 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    // 최신순 레시피 데이터를 가져오는 함수
    const fetchNewRecipes = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get('/recommendations/newest', {
                headers: {
                    Authorization: `Bearer ${token}`, // 토큰이 있으면 헤더에 추가
                },
            });

            if (response.status === 200) {
                const filtered = response.data.data.filter(product => product.availableAt.includes('Seven'));
                setRecipes(filtered);
            }
        } catch (error) {
            setError('최신순 레시피 데이터를 가져오는 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    // 선택된 옵션에 따라 데이터를 가져오는 useEffect
    useEffect(() => {
        if (selectedOption === '전체') {
            fetchAllProducts();
            fetchAllRecipes();
        } else if (selectedOption === '추천순') {
            fetchRecommendedProducts();
            fetchRecommendedRecipes();
        } else if (selectedOption === '최신순') {
            fetchNewProducts();
            fetchNewRecipes();
        }
    }, [selectedOption, token]);
    // 카테고리 데이터를 가져오는 함수
    const fetchCategoryData = async (category) => {
        try {
            setLoading(true);
            const response = await axiosInstance.get(`/products/category/${category}`, {
                headers: {
                    Authorization: `Bearer ${token}`, // 토큰이 있으면 헤더에 추가
                },
            });

            if (response.status === 200) {
                const filtered = response.data.data.filter(product => product.availableAt.includes('Seven'));
                setSevenProducts(filtered); // 가져온 데이터 설정
            }
        } catch (error) {
            setError('카테고리 데이터를 가져오는 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        fetchCategoryData(category);
    };

    // select 변경 핸들러
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const GoToMypage = () => {
        navigate("/Mypage");
    }
    const handleToggleView = (view) => {
        setIsProductView(view === 'product');
    };

    return (
        <div className='store_list_wrap'>
            <div className="top">
                <img src={back} alt="" className='back' onClick={handleBackClick} />
                <img src={seven} alt="" className='seven' />
                <img src={mypage_icon} alt="" className='mypage_icon' onClick={GoToMypage} />
            </div>
            <div className="search_div">
                <input type="text" className='input' placeholder='상품이름, 조합이름을 검색하세요.' />
                <img src={search_icon} alt="" />
            </div>
            <div className="types">
                {categories.map((category) => (
                    <div
                        key={category}
                        className={selectedCategory === category ? 'choice' : 'type'}
                        onClick={() => handleCategoryClick(category)}
                    >
                        #{category}
                    </div>
                ))}
            </div>
            <div className="title_div">
                <p className="title">오늘의 가격</p>
                <p className="price">{rangeValue}</p>
            </div>
            <div className='range'>
                <input type="range" min={0}
                    max={34000}
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
            <div className="section_div">
                <div className={isProductView ? 'choice' : 'section'}
                    onClick={() => handleToggleView('product')}>
                    상품 보기
                </div>
                <div className={!isProductView ? 'choice' : 'section'}
                    onClick={() => handleToggleView('recipe')}>
                    조합 보기
                </div>
            </div>
            <div className="list_div">
                {loading ? (
                    <p>로딩 중...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : isProductView ? (
                    <Product products={SevenProducts} /> // Product 컴포넌트에 데이터 전달
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

export default StoreList7