import React from 'react'
import { Switch, Route, NavLink, Redirect } from "react-router-dom"
import { Menu } from 'antd'
import classes from './Profile.module.css'
import MyRecipesContainer from './MyRecipes/MyRecipesContainer'
import CalculationsDataContainer from './CalculationsData/CalculationsDataContainer'
import MainProfileDataContainer from './MainProfileData/MainProfileDataContainer'
import PersonalDataContainer from './PersonalData/PersonalDataContainer'
// import {ReactComponent as ProfileMainImage} from './../../img/test.svg'
import {ReactComponent as ProfileMainImage} from './../../img/testKek.svg'


const Profile = (props) => {
 
  const arr = [
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
          mode="vertical" 
          selectedKeys={[`${props.selectedNavItem}`]}
        >
          {arr.map((navItem) => {
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
      <ProfileMainImage className={classes.profileMainImage}/>
    </div>
  )
}

export default Profile

