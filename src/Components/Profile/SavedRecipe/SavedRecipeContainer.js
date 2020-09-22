import React, { useState } from 'react'
import { connect } from 'react-redux'
import SavedRecipe from './SavedRecipe'
import { withRouter } from 'react-router-dom'


const SavedRecipeContainer = (props) => {
  const recipe = props.savedRecipes.filter((recipe => recipe.title === props.match.params.category))

// console.log(props.match.params.category)

  return <SavedRecipe kek={recipe} />
}

const mapStateToProps = (state) => ({
savedRecipes: state.userPersonalData.savedRecipes
})

export default withRouter(connect(mapStateToProps, {})(SavedRecipeContainer))
