import React from 'react'
import classes from './RecipeConstructor.module.css'
import IngredientsContainer from '../Ingredients/IngredientsContainer';
import RecipeCalculationsContainer from '../RecipeCalculations/RecipeCalculationsContainer';
import SavingRecipeContainer from '../SavingRecipe/SavingRecipeContainer';
import ChoosingIngredientsModal from '../ChoosingIngredientsModal/ChoosingIngredientsModal';

const RecipeConstructor = (props) => {

  return (
    <div>
      <IngredientsContainer />
      <RecipeCalculationsContainer />
      <SavingRecipeContainer />
      <ChoosingIngredientsModal {...props}/>
    </div>
  )
}
export default RecipeConstructor