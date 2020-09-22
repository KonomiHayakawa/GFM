import React from 'react'
import SavingRecipeForm from './SavingRecipeForm'
import { NavLink } from 'react-router-dom'
import ErrorMessage from '../../common/ErrorMessage'

const SavingRecipe = (props) => {
  return (
    props.isAuth
    ? <SavingRecipeIfAuth {...props}/>
    : <div>
        Если <NavLink to='/createAccount'>зарегистрируешься</NavLink> на этом сайте, сможешь сохранять
        все свои рецепты и редактировать их в любое время :) Уже регистрировался? 
        Тогда не забудь <NavLink to='/login'>войти</NavLink> в свой аккаунт!
      </div>
  )
}

const SavingRecipeIfAuth = (props) => {
  return (
    <div>
    {props.savingRecipe === 'done' && 
      <div>
        Рецепт сохранен, можешь найти его у себя в <NavLink to='/profile'>профиле</NavLink>
        <button onClick={() => props.constructNewRecipe()}>Составить новый рецепт</button>
      </div>
    }
    {props.savingRecipe === 'errorSameTitle' &&
      <div>
      Ты уже сохранял рецепт с таким названием! Нужно придумать что-то другое :)
      <button onClick={() => props.switchSavingRecipe(true)}>Сохранить с другим названием</button>
    </div>
    }
    {!props.savingRecipe && 
      <button onClick={() => props.switchSavingRecipe(true)}>
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
    {props.errorMessage && <ErrorMessage />

    }
  </div>
  )
}
export default SavingRecipe