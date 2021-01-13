import React from 'react'
import { Divider, Card } from 'antd'
import {EditOutlined} from '@ant-design/icons'
import './../../../../App.css'
import classes from './RecipeCard.module.css'
import defaultRecipeImg from './../../../../img/default/recipe.svg'
import IngredientsContainer from '../../../recipeConstructor/Ingredients/IngredientsContainer'
import IngredientsTableContainer from '../../../recipeConstructor/Ingredients/IngredientsTable/IngredientsTableContainer'
import RecipeCalculationsContainer from '../../../recipeConstructor/RecipeCalculations/RecipeCalculationsContainer'
import UploadNewImageForm from '../../../common/ForForms/UploadNewImageForm/UploadNewImageForm'

const RecipeCard = (props) => {
  const { Meta } = Card

  return (
    <Card
      style={{ width: '100%', textAlign:'center'}}
      bordered={false}
      cover={<RecipeCover {...props} />}
    >
      <Meta
        title={
          <>
            <h1>
              {props.recipe.title}
            </h1>    
            <Divider />
          </>
        }
        description={
          <>
            <RecipeCalculationsContainer />
            {props.editingRecipe ? ( 
              <>
                <IngredientsContainer />
                <button 
                  onClick={() => props.updateRecipe()}
                  className='globalMainBtn'
                >
                  Сохранить изменения
                </button>
              </>
            ) : ( 
              <>
                <h2>Ингредиенты</h2>
                <IngredientsTableContainer 
                  showEditingField={false}
                />
                <button 
                  onClick={() => props.switchEditingRecipe(true)}
                  className='globalMainBtn'
                >
                  Редактировать рецепт
                </button>
              </>
            )}
          </>
        }
      />
    </Card>
  )
}

const RecipeCover = (props) => {
  return (
    <>
    <img
      src={props.recipe.img || defaultRecipeImg} 
      alt='recipeImg'
      className={classes.cardCover}
    />
    <div className={classes.changingRecipeImgWrapper}>
      {!props.updatingRecipeImg ? ( 
        <span 
          onClick={() => props.setUpdatingRecipeImg(!props.updatingRecipeImg)}
          className={classes.editRecipeBtn}
        >
          <EditOutlined /> Изменить обложку
        </span>
      ) : (
        <UploadNewImageForm     
          setImgData={props.setUpdatingRecipeImg}
          forLoading={props.updateRecipeImg}
          forCancel={() => props.setUpdatingRecipeImg(!props.updatingRecipeImg)}
        />
      )}
    </div>
  </>
  )
}

export default RecipeCard