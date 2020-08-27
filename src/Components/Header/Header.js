import React from 'react'
import classes from './Header.module.css'
import logo from './../../img/logo.png'
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
            && <li><NavLink to={'/profile'}>Профиль</NavLink></li>
          }
          { props.userData.isAuth === true 
            && <li><div onClick={props.signOut}>Выйти</div></li>
          }
          { !props.userData.isAuth 
            && <li><NavLink to={'/createAccount'}>Регистрация</NavLink></li>
          }
          { !props.userData.isAuth
            && <li><NavLink to={'/login'}>Войти</NavLink></li>
          }
          <li><NavLink to={'/aboutUs'}>О нас</NavLink></li>
          <li><NavLink to={'/contacts'}>Контакты</NavLink></li>
        </ul>
      </div>
    </div>
  )
}


export default Header