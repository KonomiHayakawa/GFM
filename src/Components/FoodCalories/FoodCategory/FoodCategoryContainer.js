import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {getFoodGroup} from '../../../queries/foodCalories'
import {setError} from './../../../redux/forError'
import FoodCategory from './FoodCategory'


const FoodCategoryContainer = (props) => {

  const [foodData, setFoodData] = useState([])
  const [searchMatches, setSearchMatches] = useState([])

  useEffect(
    () => {
      getFoodGroup(props.foodCategoryLink || props.match.params.category)
      .then((response) => setFoodData(response))
      .catch((error) => props.setError(error))
    },[props.match.params.category, props.foodCategoryLink]
  )

  const searchIngredient = (event) => {
    const matches = (foodData.filter((foodItem) => {
      const requestUpperCase = event.target.value.toUpperCase()
      const requestLowerCase = event.target.value.toLowerCase()
      const titleUpperCase = foodItem.title.toUpperCase()
      const titleLowerCase = foodItem.title.toLowerCase()
      return titleUpperCase.startsWith(requestUpperCase || requestLowerCase) ||
      titleLowerCase.startsWith(requestUpperCase || requestLowerCase)
    }))
    matches.length === foodData.length
      ? setSearchMatches([])
      : setSearchMatches(matches)
  } 


  return (
    <FoodCategory 
      foodData={foodData} 
      addedFood={props.addedFood}
      errorMessage={props.errorMessage}
      searchIngredient={searchIngredient}
      searchMatches={searchMatches}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    foodCategoryLink: state.recipeConstructorReducer.modal.foodCategoryLink,
    addedFood: state.recipeConstructorReducer.addedFood,
    nutritionalValue: state.recipeConstructorReducer.nutritionalValue,
    errorMessage: state.forError.errorMessage,
  }
}

export default withRouter(connect(mapStateToProps, {setError})(FoodCategoryContainer))
