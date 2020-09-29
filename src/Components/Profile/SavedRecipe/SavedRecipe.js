import React from 'react'
import { NavLink} from 'react-router-dom'
import classes from './SavedRecipe.module.css'
import IngredientsContainer from '../../recipeConstructor/Ingredients/IngredientsContainer'
import RecipeCalculationsContainer from '../../recipeConstructor/RecipeCalculations/RecipeCalculationsContainer'
import UpdateRecipeForm from './UpdateRecipeForm'
import ChoosingIngredientsModal from '../../recipeConstructor/ChoosingIngredientsModal/ChoosingIngredientsModal'
import defaultRecipeImg from './../../../img/default/recipe.svg'

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
            return <div>
              <img className={classes.ingredientImg} src={ingredient.img} alt='ingredient.title'/>
              {ingredient.title}
              {ingredient.portionCalories} калорий
            </div>
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
          <ChoosingIngredientsModal 
            modalData={props.modalData}
            setShowModal={props.setShowModal}
            setOpenFoodCategory={props.setOpenFoodCategory}
          />
        </div>
      }

     
    </div>
  )
}

export default SavedRecipe