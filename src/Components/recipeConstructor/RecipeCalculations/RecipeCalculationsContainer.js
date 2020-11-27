import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {addIngredient, deleteIngredient} from '../../../redux/recipeConstructorReducer'
import {calculateIngredientCalories, calcWithoutRemovedIngredient} from '../../common/calculations'
import RecipeCalculations from './RecipeCalculations'
import {setSelectedIngredient} from './../../../redux/foodCaloriesReducer'

const RecipeCalculationsContainer = (props) => {

  useEffect(() => {

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

    if (props.selectedIngredientHandler === 'addIngredientToRecipe') {
      addIngredientToRecipe()
      props.setSelectedIngredient({})
    } else if (props.selectedIngredientHandler === 'cancelAddingIngredient') {
      cancelAddingIngredient()
      props.setSelectedIngredient({})
    } 
  }, [props])

  return <RecipeCalculations {...props} />
}

const mapStateToProps = (state) => {
  return ({
    addedFood: state.recipeConstructorReducer.addedFood,
    foodCategoryItems: state.foodCaloriesReducer.foodCategoryItems,
    nutritionalValue: state.recipeConstructorReducer.nutritionalValue,
    selectedIngredientData: state.foodCaloriesReducer.selectedIngredient.ingredientData,
    selectedIngredientHandler: state.foodCaloriesReducer.selectedIngredient.handlerType,
  })
}

export default connect(mapStateToProps, {addIngredient, deleteIngredient, setSelectedIngredient})(RecipeCalculationsContainer)