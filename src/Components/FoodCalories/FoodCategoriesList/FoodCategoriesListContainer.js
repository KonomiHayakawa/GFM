import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import FoodCategoriesList from './FoodCategoriesList'
import {getFoodGroupsData} from '../../../queries/foodCalories'
import {openFoodCategoryInIngredientsArea} from '../../../redux/recipeConstructorReducer'
import {setError} from './../../../redux/forError'

const FoodCategoriesListContainer = (props) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    try {
      getFoodGroupsData()
        .then(setCategories)
    } catch (error) {
      props.setError(error)
    }
  }, [props])

  return (
    <FoodCategoriesList 
      categories={categories} 
      {...props}
    />
  )
}

const mapStateToProps = (state, ownProps) => ({
  isForRecipeConstructor: ownProps.isForRecipeConstructor,
  error: state.forError.error
})

export default connect(mapStateToProps, {openFoodCategoryInIngredientsArea, setError})(FoodCategoriesListContainer)