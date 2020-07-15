import React from 'react'
import classes from './Header.module.css'
import logo from './../../img/logo.png'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <NavLink to={'menu'}><img src={logo} className={classes.logoImg} alt='logo'/></NavLink>
      </div>
      <div>
        <ul className={classes.navigation}>
          <li><NavLink to={'/createAccount'}>Регистрация</NavLink></li>
          <li><NavLink to={'/login'}>Войти</NavLink></li>
          <li><NavLink to={'/aboutUs'}>О нас</NavLink></li>
          <li><NavLink to={'/contacts'}>Контакты</NavLink></li>
        </ul>
      </div>
    </div>
  )
}


export default Header