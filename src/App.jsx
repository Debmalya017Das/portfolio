import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'


function App() {
  return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App