import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mypage from './page/Mypage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App