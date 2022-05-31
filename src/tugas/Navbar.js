import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav-wrapper' style={{color:'red'}}>
        <div className='nav-inner'>
            <Link to="/" >Home</Link>
            <Link to="/category" >Category</Link>
        </div>
    </div>
  )
}

export default Navbar