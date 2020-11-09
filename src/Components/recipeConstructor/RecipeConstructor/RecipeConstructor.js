import React from 'react'
import classes from './RecipeConstructor.module.css'
import IngredientsContainer from '../Ingredients/IngredientsContainer';
import RecipeCalculationsContainer from '../RecipeCalculations/RecipeCalculationsContainer';
import SavingRecipeContainer from '../SavingRecipe/SavingRecipeContainer';
import {ReactComponent as PageMainImage} from './../../../img/recipeConstructor/mainImage2.svg';
import {QuestionCircleOutlined, InfoCircleOutlined} from '@ant-design/icons'
import { Alert } from 'antd';
import ChoosingIngredients from '../ChoosingIngredients/ChoosingIngredients';

const RecipeConstructor = (props) => {

  return (
    <div className={classes.wrapper}>

      <div className={classes.recipeConstructor}>

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
            message='Добавляй ингредиенты и узнаешь итоговый вес сырой заготовки (в процессе приготовления продукты
              могут терять или впитывать влагу), а также - общую калорийность блюда. 
              Не забудь разделить итоговые показатели на количество порций, ведь так ты точно будешь знать, 
              какой % от твоей дневной нормы займёт такая вкуснятина.' 
            type="info" 
            icon={
              <InfoCircleOutlined />
            }
            showIcon={true}
            style={{
              width: '80%',
            }}
          />
        }

        <IngredientsContainer/>
        <RecipeCalculationsContainer />
        <SavingRecipeContainer />
      </div>

      <div>
        {props.modalData.showModal &&
          <ChoosingIngredients {...props.modalData}/>
        }
        {!props.modalData.showModal && 
          <div className={classes.pageMainImage}>
            <PageMainImage />
          </div>
        }
      </div>

    </div>
  )
}
export default RecipeConstructor

