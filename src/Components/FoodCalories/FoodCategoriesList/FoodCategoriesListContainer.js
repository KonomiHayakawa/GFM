import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {getFoodGroupsData} from '../../../queries/foodCalories'
import FoodCategoriesList from './FoodCategoriesList'
import {openFoodCategoryInModal} from '../../../redux/recipeConstructorReducer'
import {setError} from './../../../redux/forError'


const FoodCategoriesListContainer = (props) => {

  const [groups, setGroups] = useState([])

  useEffect(() => {
    getFoodGroupsData()
    .then(setGroups)
    .catch((error) => props.setError(error))
  }, [props])

  return (
    <FoodCategoriesList groups={groups} {...props}/>
  )
}

const mapStateToProps = (state, ownProps) => {
  return ({
    addToRecipe: ownProps.addToRecipe,
    errorMessage: state.forError.errorMessage
  })
}

export default connect(mapStateToProps, {openFoodCategoryInModal, setError})(FoodCategoriesListContainer)
