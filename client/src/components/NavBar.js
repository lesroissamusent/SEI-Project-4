
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { userIsAuthenticated } from '../auth/auth.js'
import '../styles/navbar.scss'


const Navbar = () => {
  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link to="/lab" className="navbar-item">
          <image src="(../../public/assets/android-chrome-512x512.png)" className="lab-icon"/>
        </Link>
        <Link to="/potions" className="navbar-item">Potions</Link>

        { userIsAuthenticated() &&
          <Link to="/profile" className="navbar-item">Profile</Link>
        }

      </div>
      <div className="navbar-end">
        { !userIsAuthenticated() &&
          <>
            <Link to="/register" className="navbar-item">
              Register
            </Link>

            <Link to="/login" className="navbar-item">
              Log in
            </Link>
          </>
        }
        { userIsAuthenticated() &&
          <button onClick={handleLogout} className="button is-dark">Log out</button>
        }
      </div>
    </nav>
  )
}

export default Navbar

















// /* eslint-disable no-unused-vars */
// import '../styles/navbar.scss'
// import React, { useEffect, useState } from 'react'
// // import { Link, useHistory, useLocation } from 'react-router-dom'

// const NavBar = () => {
  

//   return (
//     <nav className="navbar custom-nav">

//     </nav>
//   )
  

// }

// export default NavBar
