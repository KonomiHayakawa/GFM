import React from 'react'
import { Alert } from 'antd'
import {CloseOutlined} from '@ant-design/icons'
import SavingRecipeForm from './SavingRecipeForm/SavingRecipeForm'
import { NavLink } from 'react-router-dom'
import classes from './SavingRecipe.module.css'
import ErrorMessage from '../../common/ErrorMessage/ErrorMessage'
import './../../../App.css'

const SavingRecipe = (props) => {
  return (
    <div className={classes.wrapper}>
      {props.isSignedIn ? 
        ( <SavingRecipeIfAuth {...props}/>
        ) : (
          <div>
            Если <NavLink to='/createAccount'>зарегистрируешься</NavLink> на этом сайте, сможешь сохранять
            все свои рецепты и редактировать их в любое время :) Уже регистрировался? 
            Тогда не забудь <NavLink to='/login'>войти</NavLink> в свой аккаунт!
          </div>
        )
      }
    </div>
  )
}

const SavingRecipeIfAuth = (props) => {
  return (
    <div>
      {props.savingRecipe === 'done' && 
        <Alert
          closeText={<CloseOutlined className={classes.alertCloseIco}/>}
          closable
          className={classes.savingRecipeAlert}
          description={
            <span className={classes.alertMessageDescription}>
              Рецепт сохранен, можешь найти его у себя 
              в <NavLink className={classes.linkToProfile} to='/profile/myRecipes'>
                профиле
              </NavLink>
            </span>
          }
          message={
            <span className={classes.alertMessageTitle}>
              Готово :)
            </span>
          }
          onClose={() => props.switchSavingRecipe(false)}
          showIcon
          type='success'
        />
      }

      {props.savingRecipe === 'errorSameTitle' &&
        <Alert
          closable
          closeText={<CloseOutlined className={classes.alertCloseIco}/>}
          className={classes.savingRecipeAlert}
          description={
            <span className={classes.alertMessageDescription}>
              Ты уже сохранял рецепт с таким названием! Нужно придумать что-то другое :)
            </span>
          }
          message={
            <span className={classes.alertMessageTitle}>
              Не получилось :(
            </span>
          }
          onClose={() => props.switchSavingRecipe(true)}
          showIcon
          type='error'
        />
      }

      {props.savingRecipe === 'errorNoIngredients' &&
        <Alert
          message={
            <span className={classes.alertMessageTitle}>
              Не получилось :(
            </span>
          }
          description={
            <span className={classes.alertMessageDescription}>
              В рецепте нет ингредиентов
            </span>
          }
          type='error'
          showIcon
          closeText={<CloseOutlined className={classes.alertCloseIco}/>}
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

      {props.error && <ErrorMessage />}
    </div>
  )
}
export default SavingRecipe