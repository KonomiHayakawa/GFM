import React from 'react'
import classes from './MyRecipes.module.css'
import { NavLink } from 'react-router-dom'
import ErrorMessage from './../../common/ErrorMessage'
import defaultRecipeImg from './../../../img/default/recipe.svg'
import { Card, Avatar, Alert, Popconfirm, message } from 'antd';
import {DeleteOutlined, SettingOutlined} from '@ant-design/icons';

const MyRecipes = (props) => {

  const welcomeText = 
    <div>
      У тебя пока нет ни одного сохраненного рецепта. 
      Чтобы создать новый рецепт и просчитать его калорийность, переходи к 
      <NavLink to='/recipeConstructor'> конструктору рецептов</NavLink>
    </div>

  return (
    <>  
      {props.savedRecipes.length === 0
       ? <div className={classes.welcomeTextWrapper}>
          <Alert
            message='Здесь пока пусто :('
            description={welcomeText}
            type="info"
            showIcon
            className={classes.welcomeText}
          />
        </div>
      : <div className={classes.recipeItemsWrapper}>
          {props.savedRecipes.map(
            recipe => {
              return (
                <RecipeItem 
                  {...props} 
                  recipe={recipe} 
                  key={recipe.id}
                />
              )
            }
          )}
        </div>
      }
      {props.error && <ErrorMessage />}
    </>
  )
}

const RecipeItem = (props) => {
  const weight = props.recipe.weight >= 1000
    ? (props.recipe.weight / 1000).toFixed(2)
    : props.recipe.weight

  const units = props.recipe.weight >= 1000
    ? 'кг'
    : 'г'

  const { Meta } = Card;
  return (
    <Card
      style={{ width: 300 }}
      actions={[
        <NavLink to={`/savedRecipe/${props.recipe.id}`}><SettingOutlined /> Подробнее</NavLink>,
        <DeleteRecipeWithConfirm deleteRecipe={props.deleteRecipe} recipe={props.recipe}/>
      ]}
    >
      <Meta
        avatar={<Avatar size={64} shape='square' src={props.recipe.img || defaultRecipeImg} />}
        title={props.recipe.title}
        description={
          <>
            <div>Итоговый вес: {weight} {units}</div>
            <div>Калорийность: {props.recipe.calories} ккал</div>
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