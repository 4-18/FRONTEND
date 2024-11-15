import './mainpagecom.scss';
import up from "../../assets/images/up.svg";
import down from "../../assets/images/down.svg";
import MainBox from './mainbox';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthStore from '../../store/store';

export const MainListPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sortType, setSortType] = useState('popular'); // 추천순 기본값
  const [recipes, setRecipes] = useState([]);
  const userId = 2; // 현재 로그인된 사용자 ID (임시)
  
  // Token 가져오기
  const token = useAuthStore.getState().token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://15.165.181.78/recommendations', 
          {
            sort: sortType, // POST 요청의 데이터 부분에 sortType 포함
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
            },
          }
        );
        setRecipes(response.data.data); // 받아온 데이터 처리
      } catch (error) {
        console.error('Failed to fetch recipes:', error.response || error.message);
      }
    };

    fetchData();
  }, [sortType, token]); // sortType 또는 token이 변경될 때마다 호출

  const toggleHeight = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleSort = (type) => {
    setSortType(type);
  };

  return (
    <div className={`MainListWrapper ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <img
        src={isExpanded ? down : up}
        alt={isExpanded ? 'down' : 'up'}
        onClick={toggleHeight}
        className="toggleImage"
      />

      {/* 추천순 / 최신순 선택 */}
      <div className="selectList">
        <div
          className={`recommend ${sortType === 'popular' ? 'active' : ''}`}
          onClick={() => handleSort('popular')}
        >
          추천순
          <div className="recommendLine"></div>
        </div>
        <div
          className={`new ${sortType === 'newest' ? 'active' : ''}`}
          onClick={() => handleSort('newest')}
        >
          최신순
          <div className="newLine"></div>
        </div>
      </div>

      {/* 레시피 리스트 */}
      <div className="recipeList">
        {recipes.map((recipe) => (
          <MainBox
            key={recipe.id}
            recipe={recipe}
            isUserPost={recipe.userId === userId} // 내가 쓴 글 여부 확인
          />
        ))}
      </div>
    </div>
  );
};

export default MainListPage;
