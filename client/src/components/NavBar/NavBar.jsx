import React from 'react'
import "./NavBar.css"
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
      <div className='navbar-container'>
        <div className='navbar'>
          <p className='logo'><Link to='/' style={{ textDecoration: 'none', color:'white' }}>IP Database</Link></p>
          <div className='button-container'>
            <button><Link to='/new' style={{ textDecoration: 'none'}}>Add New</Link></button>
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar