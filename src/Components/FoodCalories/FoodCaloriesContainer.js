import React, { useState, useEffect } from 'react'
import {getFoodGroupsData} from '../../queries/queries'
import FoodCalories from './FoodCalories'
import { connect } from 'react-redux'
import {openFoodCategoryInModal} from './../../redux/recipeConstructorReducer'

const FoodCaloriesContainer = (props) => {

  const [groups, setGroups] = useState([])

  useEffect(() => {
    getFoodGroupsData()
    .then(setGroups)
  }, [])

  return (
    <FoodCalories groups={groups} {...props}/>
  )
}

const mapStateToProps = (state, ownProps) => {
  return ({
    addToRecipe: ownProps.addToRecipe,
  })
}

export default connect(mapStateToProps, {openFoodCategoryInModal})(FoodCaloriesContainer)
