import React from 'react'
import { Menu } from 'antd'
import { UserAddOutlined, LoginOutlined, LogoutOutlined, UserOutlined, MessageOutlined} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const HeaderMenu = (props) => {
  const headerMenuAuthorizedUser  = [
    {
      key: 'profile', 
      icon: <UserOutlined className={classes.menuItemIcon}/>, 
      linkTo: '/profile/mainInfo', 
      name: 'Профиль',
    },
    {
      key: 'logOut', 
      icon: <LogoutOutlined className={classes.menuItemIcon}/>, 
      clickAction: () => props.signOut(), 
      name: 'Выйти',
    },
  ]

  const headerMenuAnonymousUser = [
    {
      key: 'createAccount', 
      icon: <UserAddOutlined className={classes.menuItemIcon}/>, 
      linkTo: '/createAccount', 
      name: 'Регистрация',
    },
    {
      key: 'login',
      icon: <LoginOutlined className={classes.menuItemIcon}/>, 
      linkTo: '/login', 
      name: 'Войти',
    },
  ]

  return (
    <Menu 
      mode='horizontal'
      selectedKeys={[]}
      className={classes.headerMenu}
    >
      {props.isSignedIn === true ? ( 
        <>
          {headerMenuAuthorizedUser.map(item => {
            return (
              <Menu.Item 
                key={item.key}
                icon={item.icon}
                onClick={item.clickAction || null}
              >
                {item.linkTo ? 
                  ( <NavLink to={item.linkTo}>
                      {item.name}
                    </NavLink>
                  ) : (
                    item.name
                  )
                }
              </Menu.Item>
            )
          })}
        </>
      ) : (
        <>
          {headerMenuAnonymousUser.map(item => {
            return (
              <Menu.Item 
                key={item.key}
                icon={item.icon}
              >
                <NavLink to={item.linkTo}>
                  {item.name}
                </NavLink>
              </Menu.Item>
            )
          })}
        </>
      )}

      <Menu.Item 
        key='feedbackForm' 
        icon={
          <MessageOutlined
            className={classes.menuItemIcon}
          />
        }
      >
        <NavLink to={'/feedbackForm'}>
          Обратная связь
        </NavLink>
      </Menu.Item>
      
    </Menu>
  )
}

export default HeaderMenu