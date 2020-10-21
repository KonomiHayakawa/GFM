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
  foodData: ownProps.foodData,
  addRecipeButton: state.recipeConstructorReducer.modal.openFoodCategory,
})

export default connect(mapStateToProps, {})(FoodCategoryTableContainer)
