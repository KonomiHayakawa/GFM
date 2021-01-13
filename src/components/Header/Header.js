import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import logo from './../../img/common/logo.svg'
import HeaderMenu from './HeaderMenu'

const Header = (props) => {
  return (
    <div className={classes.header}>

      <div>
        <NavLink 
          to={'/'}
        >
          <img 
            src={logo} 
            className={classes.logoImg} 
            alt='logo'
          />
        </NavLink>
      </div>

      <div>
        <HeaderMenu
          isSignedIn={props.userData.isSignedIn} 
          signOut={props.signOut}
        />
      </div>
      
    </div>
  )
}

export default Header