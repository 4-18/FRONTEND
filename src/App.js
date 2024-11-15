import React from 'react';
import "../src/assets/scss/style.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from "../src/components/Intro/Intro";
import LoginPage from './page/Login/Login';
import SignUp from './page/Signup/Signup';
import MainPage from './page/MainPage/mainpage';
import RecipePlusPage from './page/recipePlusPage/recipePlusPage';
import FinishLogin from './components/SignUp/finishlogin';
import Mypage from './page/mypage/Mypage'
import MyRecipePage from './page/mypage/MyRecipePage'
import ProductLike from './page/mypage/ProductLike'
import RecipeLike from './page/mypage/RecipeLike'
import RecipeSave from './page/mypage/RecipeSave'
import StoreList from './page/list/StoreList'
import TypeList from './page/list/TypeList'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/recipe-plus' element={<RecipePlusPage />} />
        <Route path='/finish' element={<FinishLogin />} />
        <Route path='/TypeList' element={<TypeList />} />
        <Route path='/StoreList' element={<StoreList />} />
        <Route path='/MyPage' element={<Mypage />} />
        <Route path='/MyRecipePage' element={<MyRecipePage />} />
        <Route path='/ProductLike' element={<ProductLike />} />
        <Route path='/RecipeLike' element={<RecipeLike />} />
        <Route path='/RecipeSave' element={<RecipeSave />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
