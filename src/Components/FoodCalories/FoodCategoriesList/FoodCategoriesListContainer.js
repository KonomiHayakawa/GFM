import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {getFoodGroupsData} from '../../../queries/foodCalories'
import {openFoodCategoryInModal} from '../../../redux/recipeConstructorReducer'
import FoodCategoriesList from './FoodCategoriesList'
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
    <FoodCategoriesList categories={categories} {...props}/>
  )
}

const mapStateToProps = (state, ownProps) => {
  return ({
    addToRecipe: ownProps.addToRecipe,
    error: state.forError.error
  })
}

export default connect(mapStateToProps, {openFoodCategoryInModal, setError})(FoodCategoriesListContainer)
