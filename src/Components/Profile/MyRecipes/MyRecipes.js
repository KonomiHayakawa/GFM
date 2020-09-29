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
                <div>
                  <div>
                    <img src={recipe.img || defaultRecipeImg} alt='recipePicture' className={classes.recipeImg}/>
                    {recipe.title}
                    <div>Итоговый вес: {recipe.weight}</div>
                    <div>Калорийность: {recipe.calories} ккал</div>
                  </div>
                  <NavLink to={`/savedRecipe/${recipe.id}`}>Подробнее</NavLink> 
                  <button onClick={() => props.deleteRecipe(recipe)}>Удалить</button>
                  {props.errorMessage && <ErrorMessage />}
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default MyRecipes