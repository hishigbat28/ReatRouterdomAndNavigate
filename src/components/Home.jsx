import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/login')
  }, [])

  return (
    <div className="Home">
      <h1>Home Screen</h1>
    </div>
  )
}

export default Home
