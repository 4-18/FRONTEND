import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mypage from './page/mypage/Mypage'
import MyRecipePage from './page/mypage/MyRecipePage'
import ProductLike from './page/mypage/ProductLike'
import RecipeLike from './page/mypage/RecipeLike'
import RecipeSave from './page/mypage/RecipeSave'
import StoreList from './page/list/StoreList'
import TypeList from './page/list/TypeList'
// import Intro from "../src/components/Intro/Intro"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/TypeList' element={<TypeList />} />
        <Route path='/StoreList' element={<StoreList />} />
        <Route path='/MyPage' element={<Mypage />} />
        <Route path='/MyRecipePage' element={<MyRecipePage />} />
        <Route path='/ProductLike' element={<ProductLike />} />
        <Route path='/RecipeLike' element={<RecipeLike />} />
        <Route path='/RecipeSave' element={<RecipeSave />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App