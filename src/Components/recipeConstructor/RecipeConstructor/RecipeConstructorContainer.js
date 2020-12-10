import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {closeIngredientsArea, clearRecipe} from '../../../redux/recipeConstructorReducer'
import RecipeConstructor from './RecipeConstructor'
import {setRecipeData} from '../../../redux/recipeConstructorReducer'

const RecipeConstructorContainer = (props) => {
  const [showInfo, switchShowInfo] = useState(false)

  useEffect(() => {
    const addedIngredients = JSON.parse(localStorage.getItem('addedIngredients'))
    const recipeTotalCalories = localStorage.getItem('recipeTotalCalories')
    const recipeTotalWeight = localStorage.getItem('recipeTotalWeight')
    if (props.addedFood.length === 0 && addedIngredients) {
      props.setRecipeData(addedIngredients, recipeTotalCalories, recipeTotalWeight)
    }
    return () => {
      clearRecipe()
      closeIngredientsArea()
    }
}, [props.clearRecipe, props.closeIngredientsArea])

  return (
    <RecipeConstructor 
      addToLocalStorage={true}
      ingredientsArea={props.ingredientsArea}
      showInfo={showInfo}
      switchShowInfo={switchShowInfo}
    />
  )
}

const mapStateToProps = (state) => ({
  addedFood: state.recipeConstructorReducer.addedFood,
  ingredientsArea: state.recipeConstructorReducer.ingredientsArea,
})

export default connect(mapStateToProps, {closeIngredientsArea, clearRecipe, setRecipeData})(RecipeConstructorContainer)