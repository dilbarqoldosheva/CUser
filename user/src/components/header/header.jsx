//style
import './header.css'

import React from 'react'

function Header({usersLenght}) {
  return (
    <div className='navbar'>
      <div className='navbar-container container'>
        <h1 className='navbar-logo'>CUser</h1>
        <h3 className="navbar-counter">
          {usersLenght >0 ? 'you have: ' + usersLenght:"No user"}
        </h3>
      </div>
    </div>
  )
}

export default Header