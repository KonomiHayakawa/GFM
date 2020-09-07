import React, { useEffect, useState } from 'react'
import {getFoodGroup} from './../../../queries/queries'
import FoodCategory from './FoodCategory'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {addIngredient} from './../../../redux/recipeConstructorReducer'
import {getIngredient} from './../../../queries/queries'
import {calculateIngredientCalories} from './../../common/calculations'

const FoodCategoryContainer = (props) => {

  const addIngredientToRecipe = (formData) => {
    getIngredient(props.foodCategoryLink, formData.ingredientId)
      .then(foodItem => calculateIngredientCalories(foodItem, formData.weight, props.totalCalories, props.totalWeight))
      .then(data => props.addIngredient(...data))
  }

  const [foodData, setFoodData] = useState([])

  const [weightFieldOpen, changeWeightFieldOpen] = useState(false)

  useEffect(() => {
    getFoodGroup(props.match.params.category || props.foodCategoryLink)
    .then((response) => setFoodData(response))
  },[props.match.params.category, props.foodCategoryLink])

  return (
    <FoodCategory 
                  foodData={foodData} 
                  addRecipeButton={props.addRecipeButton} 
                  addIngredientToRecipe={addIngredientToRecipe}
                  weightFieldOpen={weightFieldOpen}
                  changeWeightFieldOpen={changeWeightFieldOpen}/>
  )
}

const mapStateToProps = (state) => {
  return {
    foodCategoryLink: state.recipeConstructorReducer.modal.foodCategoryLink,
    addRecipeButton: state.recipeConstructorReducer.modal.openFoodCategory,
    totalCalories: state.recipeConstructorReducer.totalCalories,
    totalWeight: state.recipeConstructorReducer.totalWeight,
  }
}

export default withRouter(connect(mapStateToProps, {addIngredient})(FoodCategoryContainer))
