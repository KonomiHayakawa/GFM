import React, { useState, useEffect } from 'react'
import {getFoodGroupsData} from '../../../queries/queries'
import FoodCategoriesList from './FoodCategoriesList'
import { connect } from 'react-redux'
import {openFoodCategoryInModal} from '../../../redux/recipeConstructorReducer'

const FoodCategoriesListContainer = (props) => {

  const [groups, setGroups] = useState([])

  useEffect(() => {
    getFoodGroupsData()
    .then(setGroups)
  }, [])

  return (
    <FoodCategoriesList groups={groups} {...props}/>
  )
}

const mapStateToProps = (state, ownProps) => {
  return ({
    addToRecipe: ownProps.addToRecipe,
  })
}

export default connect(mapStateToProps, {openFoodCategoryInModal})(FoodCategoriesListContainer)
