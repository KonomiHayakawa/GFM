import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {getFoodGroup} from '../../../queries/foodCalories'
import {getIngredient} from '../../../queries/recipeConstructor'
import {addIngredient} from '../../../redux/recipeConstructorReducer'
import {calculateIngredientCalories} from '../../common/calculations'
import {setError} from './../../../redux/forError'
import FoodCategory from './FoodCategory'

const FoodCategoryContainer = (props) => {

  const addIngredientToRecipe = (formData) => {
    getIngredient(props.foodCategoryLink, formData.ingredientId)
      .then(foodItem => calculateIngredientCalories(foodItem, formData.weight, props.nutritionalValue))
      .then(data => props.addIngredient(...data))
      .catch((error) => props.setError(error))
  }

  const [foodData, setFoodData] = useState([])
  const [weightFieldOpen, changeWeightFieldOpen] = useState(false)

  useEffect(
    () => {
      getFoodGroup(props.match.params.category || props.foodCategoryLink)
      .then((response) => setFoodData(response))
      .catch((error) => props.setError(error))
    },[props.match.params.category, props.foodCategoryLink]
  )

  return (
    <FoodCategory 
      foodData={foodData} 
      addRecipeButton={props.addRecipeButton} 
      addIngredientToRecipe={addIngredientToRecipe}
      weightFieldOpen={weightFieldOpen}
      changeWeightFieldOpen={changeWeightFieldOpen}
      addedFood={props.addedFood}
      errorMessage={props.errorMessage}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    foodCategoryLink: state.recipeConstructorReducer.modal.foodCategoryLink,
    addRecipeButton: state.recipeConstructorReducer.modal.openFoodCategory,
    addedFood: state.recipeConstructorReducer.addedFood,
    nutritionalValue: state.recipeConstructorReducer.nutritionalValue,
    totalCalories: state.recipeConstructorReducer.nutritionalValue.totalCalories,
    totalWeight: state.recipeConstructorReducer.nutritionalValue.totalWeight,
    errorMessage: state.forError.errorMessage,
  }
}

export default withRouter(connect(mapStateToProps, {addIngredient, setError})(FoodCategoryContainer))
