import React, { useState, useEffect } from 'react';
import DetailHeader from '../components/DetailHeader/DetailHeader';
import IngredientsList from '../components/RecipeDetail/IngredientsList';
import Recipe from '../components/RecipeDetail/Recipe';
import CommentList from '../components/RecipeDetail/CommentList';
import CommentForm from '../components/RecipeDetail/CommentForm';
import '../components/RecipeDetail/style.scss';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/api'; // axiosInstance import


const RecipeDetailPage = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([
    { nickname: 'user1', content: '정말 좋은 조합입니다!', date: '2024-11-07' },
    { nickname: 'user2', content: '추천합니다!', date: '2024-11-06' },
  ]);

  // 레시피 정보 가져오기
  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await axiosInstance.get(`/recommendations/${id}`);
        if (response.status === 200) {
          const data = response.data.data;
          setRecipe({
            image: data.imageUrls,
            title: data.title,
            content: data.content,
            availableAt: data.availableAt,
            foodTypes: data.foodTypes,
            products: data.productList?.map(product => ({
              id: product.id,
              name: product.name,
              price: product.price,
              availableAt: product.availableAt,
              foodType: product.foodType,
              imageUrl: product.imageUrl,
              countLikes: product.countLikes,
            })) || [], // 데이터가 없을 경우 빈 배열 설정
          });
        } else {
          setError('레시피 정보를 가져오지 못했습니다.');
        }
      } catch (err) {
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeData();
  }, [id]);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };
  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="recipe-detail-page">
      <DetailHeader />
      <div className="content-wrapper">
        {recipe && (
          <>
            <div className="recipe-info">
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              <h2 className="recipe-name">{recipe.name}</h2>
              <p className="recipe-price">{recipe.price}원</p>
            </div>
            <IngredientsList ingredients={recipe.ingredients} />
            <Recipe steps={recipe.steps} />
          </>
        )}
        <CommentList comments={comments} />
        <CommentForm onSubmit={handleCommentSubmit} />
      </div>
    </div>
  );
};

export default RecipeDetailPage;
