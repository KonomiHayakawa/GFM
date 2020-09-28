import React, { useState } from 'react'
import { connect } from 'react-redux'
import {getIngredient} from '../../../queries/recipeConstructor'
import {addIngredient} from '../../../redux/recipeConstructorReducer'
import {calculateIngredientCalories} from '../../common/calculations'
import FoodItem from './../FoodItem/FoodItem'
import {setError} from './../../../redux/forError'

const FoodItemContainer = (props) => {

  const [weightFieldOpen, changeWeightFieldOpen] = useState(false)

  const addIngredientToRecipe = (formData) => {
    getIngredient(props.foodCategoryLink, formData.ingredientId)
      .then(foodItem => calculateIngredientCalories(foodItem, formData.weight, props.nutritionalValue))
      .then(data => props.addIngredient(...data))
      .catch((error) => props.setError(error))
  }

  return (
    <FoodItem 
      {...props}
      addRecipeButton={props.addRecipeButton} 
      addIngredientToRecipe={addIngredientToRecipe}
      weightFieldOpen={weightFieldOpen}
      changeWeightFieldOpen={changeWeightFieldOpen}
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    foodCategoryLink: state.recipeConstructorReducer.modal.foodCategoryLink,
    addRecipeButton: state.recipeConstructorReducer.modal.openFoodCategory,
    foodItem: ownProps.foodItem,
    nutritionalValue: state.recipeConstructorReducer.nutritionalValue,
  }
}

export default connect(mapStateToProps, {addIngredient, setError})(FoodItemContainer)
