import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { Routes, Route } from 'react-router-dom'
import Logout from './components/Logout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  )
}

export default App
