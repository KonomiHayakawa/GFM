import React from 'react'
import classes from './RecipeConstructor.module.css'
import {kek} from './../../queries/queries'
import {foodCategories} from './../../DataBase'

const RecipeConstructor = () => {

  return (
    <div>
      RecipeConstructor
      <button onClick={() => kek(foodCategories)}>here</button>
    </div>
  )
}



export default RecipeConstructor