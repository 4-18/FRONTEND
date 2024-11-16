import React, { useEffect, useState } from 'react'
import back from '../../assets/img/back.svg'
import next from '../../assets/img/next.svg'
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../api/api'; // axiosInstance 사용
import useAuthStore from '../../store/store'; // zustand 상태 관리

const Mypage = () => {
  const navigate = useNavigate();
  const [myRecipes, setmyRecipes] = useState([]); // 내가 쓴 레시피 상태
  const [saveRecipes, setsaveRecipes] = useState([]); // 저장 누른 레시피 상태
  const [likedRecipes, setlikedRecipes] = useState([]); // 좋아요 누른 레시피 상태
  const [likedProducts, setLikedProducts] = useState([]); // 좋아요 누른 상품 상태
  const token = useAuthStore((state) => state.token); // zustand로 토큰 가져오기
  const [userData, setUserData] = useState({ username: '', nickname: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchsaveRecipes = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get('/products/liked', {
                headers: {
                    Authorization: `Bearer ${token}`, // 토큰이 있으면 헤더에 추가
                },
            });

            if (response.status === 200) {
              setsaveRecipes(response.data.data); // 데이터 설정
            }
        } catch (error) {
            setError('좋아요 상품 데이터를 가져오는 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    fetchsaveRecipes();
}, [token]);

  useEffect(() => {
    const fetchLikedRecipes = async () => {
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

    fetchLikedRecipes();
}, [token]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get('/users/mypage', {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
          },
        });

        if (response.status === 200) {
          setUserData(response.data.data); // 사용자 데이터 설정
        }
      } catch (error) {
        setError('사용자 정보를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]);
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
                setLikedProducts(response.data.data); // 데이터 설정
            }
        } catch (error) {
            setError('좋아요 상품 데이터를 가져오는 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    fetchLikedProducts();
}, [token]);

useEffect(() => {
  const fetchMyRecipes = async () => {
      try {
          setLoading(true);
          const response = await axiosInstance.get('/products/liked', {
              headers: {
                  Authorization: `Bearer ${token}`, // 토큰이 있으면 헤더에 추가
              },
          });

          if (response.status === 200) {
            setmyRecipes(response.data.data); // 데이터 설정
          }
      } catch (error) {
          setError('좋아요 상품 데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
          setLoading(false);
      }
  };

  fetchMyRecipes();
}, [token]);

  const goToMyRecipe = () => {
    navigate("/MyRecipePage");
  }
  const goToProductLike = () => {
    navigate("/ProductLike");
  }
  const goToRecipeLike = () => {
    navigate("/RecipeLike");
  }
  const goToRecipeSave = () => {
    navigate("/RecipeSave");
  }
  const handleBackClick = () => {
    navigate(-1);
  };

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='mypage_wrap'>
      <div className="top">
        <div className="left">
          <img src={back} alt="" className='back' onClick={handleBackClick} />
          <div className="text">
            <div className="text_top">
              <p className="name">{userData.nickname}</p>
              <p className="txt">님의</p>
            </div>
            <p className="txt">마이페이지</p>
          </div>
        </div>
        <div className="logout">로그아웃</div>
      </div>
      <p className="question">당신에게 편의점이란?</p>
      <p className="answer">잠깐의 휴식을 주는 소중한 밥집</p>
      <div className="pages">
        <div className="page" onClick={goToProductLike}>
          <div className="top">
            <p className="title">편의점 상품<br />좋아요</p>
            <img src={next} alt="" />
          </div>
          <p className="num">{likedProducts ? likedProducts.length : 0}</p>
        </div>
        <div className="page" onClick={goToRecipeLike}>
          <div className="top">
            <p className="title">편의점 레시피<br />좋아요</p>
            <img src={next} alt="" />
          </div>
          <p className="num">{likedRecipes ? likedRecipes.length : 0}</p>
        </div>
        <div className="page" onClick={goToRecipeSave}>
          <div className="top">
            <p className="title">편의점 레시피<br />스크랩</p>
            <img src={next} alt="" />
          </div>
          <p className="num">{saveRecipes ? saveRecipes.length : 0}</p>
        </div>
        <div className="page" onClick={goToMyRecipe}>
          <div className="top">
            <p className="title">내가 쓴 글</p>
            <img src={next} alt="" />
          </div>
          <p className="num">{myRecipes ? myRecipes.length : 0}</p>
        </div>
      </div>
    </div>
  )
}

export default Mypage