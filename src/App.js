import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mypage from './page/Mypage';
import ProductDetailPage from './page/ProductDetailPage';
import RecipeDetailPage from './page/RecipeDetailPage';
import MapPage from './page/Mappage';
import './axiosConfig'; // axios 설정 파일 import

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mypage />} />
        <Route path='/product-detail' element={<ProductDetailPage />} />
        <Route path='/recipe-detail' element={<RecipeDetailPage />} />
        <Route path='/map' element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
};

// App 컴포넌트를 default export
export default App;
