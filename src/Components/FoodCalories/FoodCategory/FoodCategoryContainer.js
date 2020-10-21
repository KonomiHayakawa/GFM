import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {getFoodGroup} from '../../../queries/foodCalories'
import {setError} from './../../../redux/forError'
import FoodCategory from './FoodCategory'
import {setOpenFoodCategory, setFoodCategoryLink} from './../../../redux/recipeConstructorReducer'

const FoodCategoryContainer = (props) => {

  const [foodData, setFoodData] = useState([])
  const [searchMatches, setSearchMatches] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(
    () => {
      try {
        getFoodGroup(props.foodCategoryLink || props.match.params.category)
          .then((response) => setFoodData(response))
          .then(() => setIsLoading(false))
      } catch (error) {
        props.setError(error)
      }
    },[props]
  )

  const searchIngredient = (event) => {
    if (event.target.value.length === 0) {
      return setSearchMatches([])
    }
    const matches = (foodData.filter((foodItem) => {
      const requestUpperCase = event.target.value.toUpperCase()
      const requestLowerCase = event.target.value.toLowerCase()
      const titleUpperCase = foodItem.title.toUpperCase()
      const titleLowerCase = foodItem.title.toLowerCase()
      return titleUpperCase.startsWith(requestUpperCase || requestLowerCase) ||
      titleLowerCase.startsWith(requestUpperCase || requestLowerCase)
    }))
    matches.length === 0
      ? setSearchMatches('none')
      : setSearchMatches(matches)
  } 

  const goBackToCategoriesList = () => {
    if (props.openFoodCategory) {
      props.setOpenFoodCategory(false)
      props.setFoodCategoryLink(null)
    } else {
      props.history.push('/foodCategoriesList');
    }
  }

  return (
    <FoodCategory 
      foodData={foodData} 
      addedFood={props.addedFood}
      error={props.error}
      searchIngredient={searchIngredient}
      searchMatches={searchMatches}
      goBackToCategoriesList={goBackToCategoriesList}
      openFoodCategory={props.openFoodCategory}
      isLoading={isLoading}
    />
  )
}

const mapStateToProps = (state) => ({
  foodCategoryLink: state.recipeConstructorReducer.modal.foodCategoryLink,
  addedFood: state.recipeConstructorReducer.addedFood,
  error: state.forError.error,
  openFoodCategory: state.recipeConstructorReducer.modal.openFoodCategory,
})

export default withRouter(connect(mapStateToProps, {setError, setOpenFoodCategory, setFoodCategoryLink})(FoodCategoryContainer))
