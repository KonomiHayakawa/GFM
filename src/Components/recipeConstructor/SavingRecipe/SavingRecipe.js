import React from 'react'
import SavingRecipeForm from './SavingRecipeForm/SavingRecipeForm'
import { NavLink } from 'react-router-dom'
import ErrorMessage from '../../common/ErrorMessage'
import classes from './SavingRecipe.module.css'
import './../../../App.css'
import { Alert } from 'antd';

const SavingRecipe = (props) => {
  return (
    <div className={classes.wrapper}>
      {props.isAuth
        ? <SavingRecipeIfAuth {...props}/>
        : <div>
            Если <NavLink to='/createAccount'>зарегистрируешься</NavLink> на этом сайте, сможешь сохранять
            все свои рецепты и редактировать их в любое время :) Уже регистрировался? 
            Тогда не забудь <NavLink to='/login'>войти</NavLink> в свой аккаунт!
          </div>
      }
    </div>
  )
}

const SavingRecipeIfAuth = (props) => {
  return (
    <div>
    {props.savingRecipe === 'done' && 
      <Alert
        message='Готово :)'
        description={
          <span>
            Рецепт сохранен, можешь найти его у себя 
            в <NavLink className={classes.linkToProfile} to='/profile/myRecipes'>
              профиле
            </NavLink>
          </span>
        }
        type='success'
        showIcon
        closable
        onClose={() => props.switchSavingRecipe(false)}
        className={classes.savingRecipeAlert}
      />
    }
    {props.savingRecipe === 'errorSameTitle' &&
      <Alert
        message='Не получилось :('
        description='Ты уже сохранял рецепт с таким названием! Нужно придумать что-то другое :)'
        type='error'
        showIcon
        closable
        onClose={() => props.switchSavingRecipe(true)}
        className={classes.savingRecipeAlert}
      />
    }
    {props.savingRecipe === 'errorNoIngredients' &&
      <Alert
        message='Не получилось :('
        description='В рецепте нет ингредиентов'
        type='error'
        showIcon
        closable
        onClose={() => props.switchSavingRecipe(false)}
        className={classes.savingRecipeAlert}
      />
    }
     {!props.savingRecipe && 
      <button 
        className={'globalMainBtn'} 
        onClick={() => props.switchSavingRecipe(true)}
      >
        Сохранить рецепт
      </button> 
    }
    {props.savingRecipe === true && 
      <SavingRecipeForm 
        ingredients={props.addedFood} 
        calories={props.stateTotalCalories} 
        weight={props.stateTotalWeight}
        saveRecipe={props.saveRecipe}
      />
    }
    {props.error && <ErrorMessage />

    }
  </div>
  )
}
export default SavingRecipe