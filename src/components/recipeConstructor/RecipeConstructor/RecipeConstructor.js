import React from 'react'
import { Alert } from 'antd'
import {QuestionCircleOutlined, InfoCircleOutlined} from '@ant-design/icons'
import classes from './RecipeConstructor.module.css'
import IngredientsContainer from '../Ingredients/IngredientsContainer'
import IngredientsArea from '../choosingIngredients/IngredientsArea'
import RecipeCalculationsContainer from '../RecipeCalculations/RecipeCalculationsContainer'
import {ReactComponent as PageMainImage} from './../../../img/recipeConstructor/mainImage2.svg'
import SavingRecipeContainer from '../SavingRecipe/SavingRecipeContainer'

const RecipeConstructor = (props) => {
  return (
    <div className={classes.wrapper}>

      <div className={classes.recipeConstructor} >

        <div className={classes.titleWrapper}>
          <h1>
            Составь свой рецепт
          </h1>
          <QuestionCircleOutlined 
            className={classes.showInfo} 
            onClick={() => props.switchShowInfo(!props.showInfo)}
          />
        </div>
        
        {props.showInfo &&
          <Alert 
            className={classes.infoAlert}
            icon={<InfoCircleOutlined />}
            message='Добавляй ингредиенты и узнаешь итоговый вес сырой заготовки (в процессе приготовления продукты
              могут терять или впитывать влагу), а также - общую калорийность блюда. 
              Не забудь разделить итоговые показатели на количество порций, ведь так ты точно будешь знать, 
              какой % от твоей дневной нормы займёт такая вкуснятина.' 
            type='info'
            showIcon={true}
            style={{width: '80%'}}
          />
        }

        <IngredientsContainer addToLocalStorage={props.addToLocalStorage}/>
        <RecipeCalculationsContainer addToLocalStorage={props.addToLocalStorage}/>
        <SavingRecipeContainer/>
      </div>

      <div>
        {props.ingredientsArea.showIngredientsArea &&
          <IngredientsArea {...props.ingredientsArea}/>
        }

        {!props.ingredientsArea.showIngredientsArea && 
          <div className={classes.pageMainImage}>
            <PageMainImage />
          </div>
        }
      </div>

    </div>
  )
}
export default RecipeConstructor