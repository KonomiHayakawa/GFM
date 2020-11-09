import React from 'react'
import { Divider, Card } from 'antd'
import {EditOutlined} from '@ant-design/icons'
import classes from './SavedRecipe.module.css'
import './../../../App.css'
import IngredientsContainer from '../../recipeConstructor/Ingredients/IngredientsContainer'
import RecipeCalculationsContainer from '../../recipeConstructor/RecipeCalculations/RecipeCalculationsContainer'
import defaultRecipeImg from './../../../img/default/recipe.svg'
import ErrorMessage from '../../common/ErrorMessage'
import ChoosingIngredients from './../../recipeConstructor/ChoosingIngredients/ChoosingIngredients'
import BackArrow from './../../common/BackArrow/BackArrow'
import {ReactComponent as PageMainImage} from './../../../img/proba.svg'
import IngredientsTableContainer from './../../recipeConstructor/Ingredients/IngredientsTable/IngredientsTableContainer'
import UploadNewImageForm from './../../common/UploadNewImageForm/UploadNewImageForm'

const SavedRecipe = (props) => {

  return (
    <div>
      <BackArrow clickAction={props.goToRecipesList}/> 

      <div className={classes.wrapper}>
        <RecipeCard {...props}/>
      
        {props.modalData.showModal
          ? <ChoosingIngredients {...props.modalData}/>
          : <PageMainImage/>
        }
      </div>

      {props.error && <ErrorMessage />}
    </div>
  )
}

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
            {props.editingRecipe 
            ? <>
                <IngredientsContainer />
                <button 
                  onClick={() => props.updateRecipe()}
                  className='globalMainBtn'
                >
                  Сохранить изменения
                </button>
              </>
            : <>
                <h2>Ингредиенты</h2>
                <IngredientsTableContainer showEditingField={false}/>
                <button 
                  onClick={() => props.switchEditingRecipe(true)}
                  className='globalMainBtn'
                >
                  Редактировать рецепт
                </button>
              </>
            }
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
      style={{height: '120px', width: 'auto', margin: '0 auto'}}
    />
    <div className={classes.changingRecipeImgWrapper}>
      {!props.updatingRecipeImg 
        ? <span 
            onClick={() => props.setUpdatingRecipeImg(!props.updatingRecipeImg)}
            className={classes.editRecipeBtn}
          >
            <EditOutlined /> Изменить обложку
          </span>
        : <UploadNewImageForm     
            setImgData={props.setUpdatingRecipeImg}
            forLoading={props.updateRecipeImg}
            forCancel={() => props.setUpdatingRecipeImg(!props.updatingRecipeImg)}
          />
      }
    </div>
  </>
  )
}

export default SavedRecipe