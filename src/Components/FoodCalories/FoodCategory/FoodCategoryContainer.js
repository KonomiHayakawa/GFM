import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {getFoodGroup} from '../../../queries/foodCalories'
import {setError} from './../../../redux/forError'
import {setOpenFoodCategory, setFoodCategoryLink} from './../../../redux/recipeConstructorReducer'
import FoodCategory from './FoodCategory'
import {setFoodCategoryItems} from './../../../redux/foodCaloriesReducer'

const FoodCategoryContainer = (props) => {

  const [searchMatches, setSearchMatches] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(
    () => {
      try {
        getFoodGroup(props.foodCategoryLink || props.match.params.category)
          .then((response) => props.setFoodCategoryItems(response))
          .then(() => setIsLoading(false))
      } catch (error) {
        props.setError(error)
      }
    },[props.foodCategoryLink, props.match.params.category]
  )

  const searchIngredient = (event) => {
    if (event.target.value.length === 0) {
      return setSearchMatches([])
    }
    const matches = (props.foodData.filter((foodItem) => {
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
      foodData={props.foodData} 
      error={props.error}
      searchIngredient={searchIngredient}
      searchMatches={searchMatches}
      goBackToCategoriesList={goBackToCategoriesList}
      isLoading={isLoading}
    />
  )
}

const mapStateToProps = (state) => ({
  foodCategoryLink: state.recipeConstructorReducer.modal.foodCategoryLink,
  error: state.forError.error,
  openFoodCategory: state.recipeConstructorReducer.modal.openFoodCategory,
  foodData: state.foodCaloriesReducer.foodCategoryItems,
})

export default withRouter(connect(mapStateToProps, {setFoodCategoryItems, setError, setOpenFoodCategory, setFoodCategoryLink})(FoodCategoryContainer))
