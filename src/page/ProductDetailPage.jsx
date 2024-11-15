import React, { useState } from 'react';
import Header from '../components/Header/Header';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import ActionButtons from '../components/ProductDetail/ActionButtons';
import CommentList from '../components/ProductDetail/CommentList';
import CommentForm from '../components/ProductDetail/CommentForm';
import '../components/ProductDetail/style.scss';
import { useNavigate } from 'react-router-dom';

//API 연동 필요한 부분
const ProductDetailPage = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState([
    { nickname: 'user1', content: '정말 맛있어요!', date: '2024-11-07' },
    { nickname: 'user2', content: '추천합니다!', date: '2024-11-06' },
  ]);

  const product = {
    image: require('../assets/images/example.jpeg'),
    name: '진라면',
    price: 1200,
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="product-detail-page">
      <Header onBackClick={handleBackClick} />
      <div className="content-wrapper">
        <ProductInfo product={product} />
        <ActionButtons onCombo={() => navigate('/recipe-detail')} />
        <CommentList comments={comments} />
        <CommentForm onSubmit={handleCommentSubmit} />
      </div>
    </div>
  );
};

export default ProductDetailPage;