import React from 'react'
import classes from './MyRecipes.module.css'
import { NavLink } from 'react-router-dom'
import ErrorMessage from './../../common/ErrorMessage'
import defaultRecipeImg from './../../../img/default/recipe.svg'

const MyRecipes = (props) => {

  return (
    <div> 
      Мои рецепты:
      {props.savedRecipes.length === 0
      ? <div>
          У тебя пока нет ни одного сохраненного рецепта. 
          Чтобы создать новый рецепт и просчитать его калорийность, переходи к 
          <NavLink to='/recipeConstructor'> конструктору рецептов</NavLink>
        </div>
      : <div>
          {
            props.savedRecipes.map(recipe => {
              return (
                <RecipeItem {...props} recipe={recipe} key={recipe.id}/>
              )
            })
          }
        </div>
      }
      {props.error && <ErrorMessage />}
    </div>
  )
}

const RecipeItem = (props) => {
  return (
    <React.Fragment>
      <div>
        <div>
          <img src={props.recipe.img || defaultRecipeImg} alt={props.recipe.title} className={classes.recipeImg}/>
          {props.recipe.title}
          <div>Итоговый вес: {props.recipe.weight}</div>
          <div>Калорийность: {props.recipe.calories} ккал</div>
        </div>
        <NavLink to={`/savedRecipe/${props.recipe.id}`}>Подробнее</NavLink> 
        <button onClick={() => props.deleteRecipe(props.recipe)}>Удалить</button>
      </div>
    </React.Fragment>
  )
}

export default MyRecipes