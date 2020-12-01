import React from 'react'
import {isMobile} from 'react-device-detect'
import { NavLink } from 'react-router-dom'
import { Card, Avatar, Alert, Popconfirm, message } from 'antd'
import {DeleteOutlined, SettingOutlined} from '@ant-design/icons'
import classes from './MyRecipes.module.css'
import defaultRecipeImg from './../../../img/default/recipe.svg'
import ErrorMessage from './../../common/ErrorMessage/ErrorMessage'

const MyRecipes = (props) => {
  const welcomeText = 
    <div>
      У тебя пока нет ни одного сохраненного рецепта. 
      Чтобы создать новый рецепт и просчитать его калорийность, переходи к 
      <NavLink to='/recipeConstructor'> конструктору рецептов</NavLink>
    </div>

  return (
    <>  
      {props.savedRecipes.length === 0 ? 
        ( <div className={classes.welcomeTextWrapper}>
            <Alert
              message='Здесь пока пусто :('
              description={welcomeText}
              type='info'
              showIcon
              className={classes.welcomeText}
            />
          </div>
        ) : (
          <div className={classes.recipeItemsWrapper}>
            {props.savedRecipes.map(recipe => {
              return (
                <RecipeItem 
                  {...props} 
                  recipe={recipe} 
                  key={recipe.id}
                />
              )
            })}
          </div>
        )
      }
      {props.error && <ErrorMessage />}
    </>
  )
}

const RecipeItem = (props) => {
  const weight = props.recipe.weight >= 1000 ? (props.recipe.weight / 1000).toFixed(2) : props.recipe.weight
  const units = props.recipe.weight >= 1000 ? 'кг' : 'г'

  const { Meta } = Card

  return (
    <Card
      className={classes.recipeCard}
      actions={[
        <span className={classes.cardFooterItem}>
          <NavLink to={`/savedRecipe/${props.recipe.id}`}>
            <SettingOutlined /> Подробнее
          </NavLink>
        </span>,
        <span className={classes.cardFooterItem}>
          {isMobile ? 
            ( <span onClick={() => props.deleteRecipe(props.recipe)}>
                <DeleteOutlined /> Удалить
              </span>
            ) : (
              <DeleteRecipeWithConfirm 
                deleteRecipe={props.deleteRecipe} 
                recipe={props.recipe}
              />
            )
          }
        </span>
      ]}
    >
      <Meta
        avatar={
          <Avatar 
            className={classes.recipeCover}
            shape='square' 
            src={props.recipe.img || defaultRecipeImg} 
          />
        }
        title={
          <span className={classes.recipeTitle}>
            {props.recipe.title}
          </span>}
        description={
          <>
            <div className={classes.totalWeight}>
              Итоговый вес: {weight} {units}
            </div>
            <div className={classes.totalCalories}>
              Калорийность: {props.recipe.calories} ккал
            </div>
          </>
        }
      />
    </Card>
  )
}

const DeleteRecipeWithConfirm = (props) => {
  function confirm(e) {
    props.deleteRecipe(props.recipe)
    message.success('Успешно удалено')
  }

  return (
    <Popconfirm
      title='Точно удалить?'
      onConfirm={confirm}
      okText='Да'
      cancelText='Нет'
      
    >
      <DeleteOutlined /> Удалить
    </Popconfirm>
  )
}

export default MyRecipes