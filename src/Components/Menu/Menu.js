import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Menu.module.css'
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
      {menuItems.map(item => <MenuItem item={item} key={item.id}/>)}
    </div>
  )
}

const MenuItem = (props) => {
  return (
    <React.Fragment>
      <NavLink to={props.item.menuItemLink} className={classes.menuItemTitle}> 
        <div className={classes.menuItem}>
          <div className={classes.menuItemImgWrapper}>
            <img className={classes.menuItemImg} src={props.item.imgSrc} alt='menu-item-img'/>
          </div>
          {props.item.linkTitle}
        </div>
      </NavLink>
    </React.Fragment>
  )
}

export default Menu