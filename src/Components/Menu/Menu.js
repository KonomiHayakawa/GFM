import React from 'react'
import classes from './Menu.module.css'
import { NavLink } from 'react-router-dom'
import foodCalories from './../../img/menu/foodCalories.svg'
import recipeConstructor from './../../img/menu/recipeConstructor.svg'
import personalCalculations from './../../img/menu/personalCalculations.svg'


const Menu = (props) => {
  const menuItems = [
    {id: 1, imgSrc: foodCalories, linkTitle: 'Калорийность продуктов', menuItemLink: '/foodCategoriesList'},
    {id: 2, imgSrc: recipeConstructor, linkTitle: 'Просчитать калорийность рецепта', menuItemLink: '/recipeConstructor'},
    {id: 3, imgSrc: personalCalculations, linkTitle: 'Индивидуальные рассчёты', menuItemLink: '/personalCalculators'},
  ]

  return (
    <div className={classes.menu}>
      {menuItems.map(item => {
        return (
          <NavLink to={item.menuItemLink} className={classes.menuItemTitle}> 
            <div className={classes.menuItem}>
              <div className={classes.menuItemImgWrapper}>
                <img className={classes.menuItemImg} src={item.imgSrc} alt='menu-item-img'/>
              </div>
              {item.linkTitle}
            </div>
          </NavLink>
        )
      })}
    </div>
  )
}


export default Menu