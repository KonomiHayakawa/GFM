import React from 'react'
import { NavLink} from 'react-router-dom'
import classes from './SavedRecipe.module.css'
import IngredientsContainer from '../../recipeConstructor/Ingredients/IngredientsContainer'
import RecipeCalculationsContainer from '../../recipeConstructor/RecipeCalculations/RecipeCalculationsContainer'
import UpdateRecipeForm from './UpdateRecipeForm'
import defaultRecipeImg from './../../../img/default/recipe.svg'
import ErrorMessage from '../../common/ErrorMessage'
import ChoosingIngredients from './../../recipeConstructor/ChoosingIngredients/ChoosingIngredients'

const SavedRecipe = (props) => {

  return (
    <div>
      <NavLink to='/profile'>BACK</NavLink>
      <div>
        <h5>{props.recipe.title}</h5>
        <img className={classes.recipeImg} src={props.recipe.img || defaultRecipeImg} alt='recipeImg' />
        <div>
        <button onClick={() => props.switchUpdatingRecipeImg(!props.updatingRecipeImg)}>Изменить обложку рецепта</button>
        {props.updatingRecipeImg && <UpdateRecipeForm recipe={props.recipe} updateRecipeImg={props.updateRecipeImg}/> }
        </div>
      </div>

      {!props.editingRecipe && props.recipe.ingredients &&
        <div>
          Ингредиенты: {props.recipe.ingredients.map((ingredient) => {
            return <RecipeIngredientsInfo key={ingredient.id} ingredient={ingredient}/>
          })}
        <div>
          Общий вес: {
            props.recipe.weight >= 1000
            ? (props.recipe.weight / 1000).toFixed(2)
            : props.recipe.weight
          } {
            props.recipe.weight >= 1000
            ? <span>кг</span>
            : <span>грамм</span>
          }
        </div>
        <div>
          Общая калорийность блюда: {Number(props.recipe.calories).toFixed(1)} ккал
        </div>

        <button onClick={() => props.switchEditingRecipe(true)}>
          Редактировать
        </button>
        </div>
      }


      {props.editingRecipe &&
        <div>
          <IngredientsContainer />
          <RecipeCalculationsContainer />
          <button onClick={() => props.updateRecipe()}>Сохранить изменения</button>
          <ChoosingIngredients {...props.modalData}/>
        </div>
      }

      {props.error && <ErrorMessage />}
    </div>
  )
}

const RecipeIngredientsInfo = (props) => {
  return (
    <React.Fragment>
      <img className={classes.ingredientImg} src={props.ingredient.img} alt={props.ingredient.title}/>
      {props.ingredient.title}
      {props.ingredient.portionCalories} калорий
    </React.Fragment>
  )
}

export default SavedRecipe