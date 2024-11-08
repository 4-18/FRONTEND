import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from "./page/Signup/Signup"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App