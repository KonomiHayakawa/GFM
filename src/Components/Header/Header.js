import React from 'react'
import classes from './Header.module.css'
import logo from './../../img/logo.svg'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div>
        <NavLink to={'/menu'}><img src={logo} className={classes.logoImg} alt='logo'/></NavLink>
      </div>
      <div>
        <ul className={classes.navigation}>
          { props.userData.isAuth === true
            ? <React.Fragment>
                <li><NavLink to={'/profile'}>Профиль</NavLink></li>
                <li><div onClick={props.signOut}>Выйти</div></li>
              </React.Fragment>
            : <React.Fragment>
                <li><NavLink to={'/createAccount'}>Регистрация</NavLink></li>
                <li><NavLink to={'/login'}>Войти</NavLink></li>
              </React.Fragment>
          }
          <li><NavLink to={'/feedbackForm'}>Обратная связь</NavLink></li>
        </ul>
      </div>
    </div>
  )
}


export default Header