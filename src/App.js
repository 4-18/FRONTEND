import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Intro from "../src/components/Intro/Intro"
import LoginPage from './page/Login/Login'
import SignUp from './page/Signup/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App