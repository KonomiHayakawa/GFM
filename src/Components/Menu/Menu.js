import React from 'react'
import classes from './Menu.module.css'
import { NavLink } from 'react-router-dom'


const Menu = (props) => {
  return (
    <div className={classes.menu}>
      {props.data.menuItems.map(item => 
        {
          return (
            <NavLink to={item.menuItemLink} className={classes.menuItemTitle}> 
              <div className={classes.menuItem}>
                <div className={classes.menuItemImg}>
                  <img src={item.imgSrc} alt='menu-item-img'/>
                </div>
                {item.linkTitle}
              </div>
            </NavLink>
          )
        })
      }
    </div>
  )
}


export default Menu