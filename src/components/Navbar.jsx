import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>|
      <Link to="/about">About Us</Link>|
      <Link to="/register">Register</Link>|
      <Link to="/effect">Use Effect</Link>

    </div>
  )
}

export default Navbar