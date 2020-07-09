import React from 'react'
import classes from './Header.module.css'
import logo from './../../img/logo.png'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <img src={logo} className={classes.logoImg}/>
      </div>
      <div>
        <ul className={classes.navigation}>
          <li><NavLink to={'/caloriesInfo'}>Больше о калорийности</NavLink></li>
          <li><NavLink to={'/aboutUs'}>О нас</NavLink></li>
          <li><NavLink to={'/contacts'}>Контакты</NavLink></li>
        </ul>
      </div>
    </div>
  )
}


export default Header