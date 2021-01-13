import React from 'react'
import { Switch, Route, NavLink, Redirect } from "react-router-dom"
import { Menu } from 'antd'
import {isMobile} from 'react-device-detect'
import classes from './Profile.module.css'
import CalculationsDataContainer from './CalculationsData/CalculationsDataContainer'
import MyRecipesContainer from './MyRecipes/MyRecipesContainer'
import MainProfileDataContainer from './MainProfileData/MainProfileDataContainer'
import PersonalDataContainer from './PersonalData/PersonalDataContainer'
import {ReactComponent as ProfileMainImage} from './../../img/profile/profileMainImage.svg'

const Profile = (props) => {
  const profileTabs = [
    {link: '/profile/mainInfo', title: 'Основное', component: MainProfileDataContainer, key: 'mainInfo'},
    {link: '/profile/personalInfo', title: 'Личная информация', component: PersonalDataContainer, key: 'personalInfo'},
    {link: '/profile/calculations', title: 'Рассчёты', component: CalculationsDataContainer, key: 'calculations'},
    {link: '/profile/myRecipes', title: 'Мои рецепты', component: MyRecipesContainer, key: 'myRecipes'},
  ]

  const handleClick = e => {
    props.setSelectedNavItem(e.key)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.sideNavigation}>
        <Menu 
          onClick={(e) => handleClick(e)}  
          mode= {isMobile ? 'horizontal' : 'vertical' }
          selectedKeys={[`${props.selectedNavItem}`]}
        >
          {profileTabs.map(navItem => {
            return (
              <Menu.Item key={navItem.key}>
                <NavLink 
                  to={navItem.link} 
                  className={classes.navigationLink}
                >
                  {navItem.title}
                </NavLink>
              </Menu.Item>
            )
          })}
        </Menu>
      </div>

      <div className={classes.profileSection}>
        <Switch>
          <Route path={`/profile/mainInfo`} exact component={MainProfileDataContainer} />
          <Route path={`/profile/personalInfo`} component={PersonalDataContainer} />
          <Route path={`/profile/calculations`} component={CalculationsDataContainer} />
          <Route path={`/profile/myRecipes`} component={MyRecipesContainer} />
          <Redirect from='/profile' to='/profile/mainInfo' />
        </Switch>
      </div>
      {!isMobile &&
        <ProfileMainImage className={classes.profileMainImage}/>
      }
    </div>
  )
}

export default Profile

