import React from 'react'
import classes from './ProductsCalories.module.css'
import { NavLink } from 'react-router-dom'

const ProductsCalories = () => {
  return (
    <div>
      <NavLink to='/menu'>BACK TO MENU</NavLink>
      <div>
        <div><NavLink to={'/mushrooms'}>Грибы</NavLink></div>
        <div><NavLink to={'/sausages'}>Сосиски и колбасы</NavLink></div>
        <div><NavLink to={'/cereals'}></NavLink></div>
        <div><NavLink to={'/fats'}>Масла и жиры</NavLink></div>
        <div><NavLink to={'/milkProducts'}>Молочные продукты</NavLink></div>
      </div>
    </div>
  )
}

export default ProductsCalories