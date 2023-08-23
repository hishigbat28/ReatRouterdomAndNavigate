import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Songolt = () => {
  const navigate = useNavigate()

  const onLogout = () => {
    navigate('/logout')
  }
  return (
    <div className="Songolt">
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/login">Login</Link>
      </h1>
      <h1>
        <Link to="/register">Register</Link>
      </h1>
      <button onClick={onLogout}>Log out</button>
    </div>
  )
}

export default Songolt
