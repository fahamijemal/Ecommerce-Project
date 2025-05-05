import React from 'react'
import './Style.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <h1>DEVSQUAD</h1>
        </div>
        <div className='anchor flex gap-14'>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/About">About</a>
            <a href="/login">👤</a>
        </div>
    </div>
  )
}

export default Navbar