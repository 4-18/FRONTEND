import React, { useState, useEffect } from 'react';
import DetailHeader from '../components/DetailHeader/DetailHeader';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import ActionButtons from '../components/ProductDetail/ActionButtons';
import CommentList from '../components/ProductDetail/CommentList';
import CommentForm from '../components/ProductDetail/CommentForm';
import '../components/ProductDetail/style.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../api/api'; // axiosInstance import

//API 연동 필요한 부분
const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([
    { nickname: 'user1', content: '정말 맛있어요!', date: '2024-11-07' },
    { nickname: 'user2', content: '추천합니다!', date: '2024-11-06' },
  ]);
  // 상품 정보 가져오기
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axiosInstance.get(`/products/${id}`);
        if (response.status === 200) {
          const data = response.data.data;
          setProduct({
            image: data.imageUrl,
            name: data.name,
            price: data.price,
            availableAt: data.availableAt,
            foodType: data.foodType,
            countLikes: data.countLikes,
          });
        } else {
          setError('상품 정보를 가져오지 못했습니다.');
        }
      } catch (err) {
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };

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
    <div className="product-detail-page">
      <DetailHeader />
      <div className="content-wrapper">
      {product && (
          <>
            <ProductInfo product={product} />
            <ActionButtons onCombo={() => navigate('/recipe-plus')} />
          </>
        )}
        <CommentList comments={comments} />
        <CommentForm onSubmit={handleCommentSubmit} />
      </div>
    </div>
  );
};

export default ProductDetailPage;