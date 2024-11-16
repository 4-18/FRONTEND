import React, { useState } from 'react';
import DetailHeader from '../components/DetailHeader/DetailHeader';
import IngredientsList from '../components/RecipeDetail/IngredientsList';
import Recipe from '../components/RecipeDetail/Recipe';
import CommentList from '../components/RecipeDetail/CommentList';
import CommentForm from '../components/RecipeDetail/CommentForm';
import '../components/RecipeDetail/style.scss';
import { useNavigate } from 'react-router-dom';

const RecipeDetailPage = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState([
    { nickname: 'user1', content: '이 조합 정말 좋네요!', date: '2024-11-07' },
    { nickname: 'user2', content: '추천합니다!', date: '2024-11-06' },
  ]);

  const recipe = {
    image: require('../assets/images/example.jpeg'),
    name: '편의점 근본 마크 정식',
    price: 5000,
    ingredients: [
      { name: '진라면', price: 1500 },
      { name: '삼양 라면', price: 2500 },
      { name: '스트링치즈', price: 3500 },
      { name: '컵라면', price: 2000 },
      { name: '스팸', price: 4500 },
      { name: '김밥', price: 3000 },
      { name: '콜라', price: 1500 },
      { name: '포카칩', price: 2000 }
    ],
    steps: [
      '진라면의 분말수프를 반만 넣고 면에 볶는다.',
      '콕콕라면의 분말수프를 1/3 넣고 끓는 물과 함께 진라면에 넣는다.',
      '스트링 치즈를 전자렌지에 30초 돌린 후 올려서 먹는다.',
    ],
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="recipe-detail-page">
      <DetailHeader />
      <div className="content-wrapper">
        <div className="recipe-info">
          <img src={recipe.image} alt={recipe.name} className="recipe-image" />
          <h2 className="recipe-name">{recipe.name}</h2>
          <p className="recipe-price">{recipe.price}원</p>
        </div>
        <IngredientsList ingredients={recipe.ingredients} />
        <Recipe steps={recipe.steps} />
        <CommentList comments={comments} />
        <CommentForm onSubmit={handleCommentSubmit} />
      </div>
    </div>
  );
};

export default RecipeDetailPage;
