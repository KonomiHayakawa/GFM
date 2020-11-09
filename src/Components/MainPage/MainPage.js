import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainPage.module.css'
import foodCalories from './../../img/mainPage/foodCalories.svg'
import recipeConstructor from './../../img/mainPage/recipeConstructor.svg'
import personalCalculations from './../../img/mainPage/personalCalculations.svg'
import { Card } from 'antd'


const MainPage = (props) => {

  const menuItems = [
    {id: 1, imgSrc: foodCalories, linkTitle: 'Калорийность продуктов', menuItemLink: '/foodCategoriesList'},
    {id: 2, imgSrc: recipeConstructor, linkTitle: 'Конструктор рецептов', menuItemLink: '/recipeConstructor'},
    {id: 3, imgSrc: personalCalculations, linkTitle: 'Индивидуальные рассчёты', menuItemLink: '/personalCalculators'},
  ]

  return (
    <div className={classes.wrapper}>
      {menuItems.map(
        item => {
          return <MenuItem item={item} key={item.id}/>
        }
      )}
    </div>
  )
}

const MenuItem = (props) => {
  const { Meta } = Card
  return (
    <React.Fragment>
      <NavLink to={props.item.menuItemLink}> 
        <Card
          hoverable
          style={{ width: 380, textAlign:'center' }}
          cover={<img alt='itemCover' src={props.item.imgSrc} />}
          bordered={false}
        >
          <Meta 
            title={<h3>{props.item.linkTitle}</h3>} 
          />
        </Card>
      </NavLink>
    </React.Fragment>
  )
}

export default MainPage


