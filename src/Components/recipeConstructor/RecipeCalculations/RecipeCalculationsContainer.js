import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import RecipeCalculations from './RecipeCalculations'
import {calculateIngredientCalories, calcWithoutRemovedIngredient} from '../../common/calculations'
import {addIngredient, deleteIngredient} from '../../../redux/recipeConstructorReducer'
import {setSelectedIngredient} from './../../../redux/foodCaloriesReducer'

const RecipeCalculationsContainer = (props) => {

  const addIngredientToRecipe = () => {
    const ingredient = props.foodCategoryItems.find(foodItem => foodItem.id === props.selectedIngredientData.ingredientId)
    const calculatedIngredientData = calculateIngredientCalories(ingredient, props.selectedIngredientData.weight, props.nutritionalValue)
    props.addIngredient(...calculatedIngredientData)
  }

  const cancelAddingIngredient = () => {
    const addedIngredient = props.addedFood.find(ingredient => ingredient.id === props.selectedIngredientData.ingredientId)
    const newTotalData = calcWithoutRemovedIngredient(addedIngredient, props.nutritionalValue)
    props.deleteIngredient(props.selectedIngredientData.ingredientId, ...newTotalData)
  }

  useEffect(() => {
    if (props.selectedIngredientHandler === 'addIngredientToRecipe') {
      addIngredientToRecipe()
      props.setSelectedIngredient({})
    } else if (props.selectedIngredientHandler === 'cancelAddingIngredient') {
      cancelAddingIngredient()
      props.setSelectedIngredient({})
    } 
  }, [props.selectedIngredientData])

  return <RecipeCalculations {...props} />
}

const mapStateToProps = (state) => {
  return ({
    nutritionalValue: state.recipeConstructorReducer.nutritionalValue,
    selectedIngredientData: state.foodCaloriesReducer.selectedIngredient.ingredientData,
    selectedIngredientHandler: state.foodCaloriesReducer.selectedIngredient.handlerType,
    foodCategoryItems: state.foodCaloriesReducer.foodCategoryItems,
    addedFood: state.recipeConstructorReducer.addedFood,
  })
}

export default connect(mapStateToProps, {addIngredient, deleteIngredient, setSelectedIngredient})(RecipeCalculationsContainer)