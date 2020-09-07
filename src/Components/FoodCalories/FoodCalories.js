import React from 'react'
import { NavLink } from 'react-router-dom'

const FoodCalories = (props) => {

  return (
    <div>
      <NavLink to='/menu'>BACK TO MENU</NavLink>
      <div>{props.groups.map((group) => {
        return props.addToRecipe
        ? <div><a onClick={() => props.openFoodCategoryInModal(true, `${group.linkTo}`)}>{group.name}</a></div>
        : <div><NavLink to={`foodGroup/${group.linkTo}`}>{group.name}</NavLink></div>
      })}</div>
    </div>
  )
}

export default FoodCalories
