import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import { UserAddOutlined, LoginOutlined, LogoutOutlined, UserOutlined, MessageOutlined} from '@ant-design/icons'
import classes from './Header.module.css'
import logo from './../../img/common/logo.svg'
// import logo from './../../img/common/home.png'


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
          isAuth={props.userData.isAuth} 
          signOut={props.signOut}
        />
      </div>
    </div>
  )
}

const HeaderMenu = (props) => {
  return (
    <Menu 
      mode="horizontal"
      selectedKeys={[]}
    >
      { props.isAuth === true
        ? <>
          <Menu.Item 
            key="createAccount" 
            icon={<UserOutlined />}
          >
            <NavLink to={'/profile/mainInfo'}>
              Профиль
            </NavLink>
          </Menu.Item>

          <Menu.Item 
            key="login" 
            icon={<LogoutOutlined />} 
            onClick={() => props.signOut()}
          >
            Выйти
          </Menu.Item>
        </>
        : <>
          <Menu.Item 
            key="createAccount" 
            icon={<UserAddOutlined />}
          >
            <NavLink to={'/createAccount'}>
              Регистрация
            </NavLink>
          </Menu.Item>

          <Menu.Item 
            key="login" 
            icon={<LoginOutlined />}
          >
            <NavLink to={'/login'}>
              Войти
            </NavLink>
          </Menu.Item>
        </>
      }

      <Menu.Item 
        key="feedbackForm" 
        icon={<MessageOutlined/>}
      >
        <NavLink to={'/feedbackForm'}>
          Обратная связь
        </NavLink>
      </Menu.Item>
      
    </Menu>
  )
}

export default Header