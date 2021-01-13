import React from 'react'
import { connect } from 'react-redux'
import FoodCategoryTable from './FoodCategoryTable'

const FoodCategoryTableContainer = (props) => {
  return (
    <FoodCategoryTable
      {...props}
    />
  )
}

const mapStateToProps = (state, ownProps) => ({
  addRecipeButton: state.recipeConstructorReducer.ingredientsArea.openFoodCategory,
  foodData: ownProps.foodData,
})

export default connect(mapStateToProps, {})(FoodCategoryTableContainer)