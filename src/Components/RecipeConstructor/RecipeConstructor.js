import React from 'react'
import classes from './RecipeConstructor.module.css'
import FoodCategoriesListContainer from '../foodCalories/FoodCategoriesList/FoodCategoriesListContainer'
import Modal from './../common/Modal';
import FoodCategoryContainer from '../foodCalories/FoodCategory/FoodCategoryContainer';
import EditIngredientForm from './EditIngredientForm';
import {getAllUserInfo} from './../../queries/queries'
import SavingRecipeForm from './SavingRecipeForm';


const RecipeConstructor = (props) => {

  return (

    <div>
      <button onClick={() => getAllUserInfo('wASTbKXtnNXoS23aOyWD0YLjJSq2').then(resp => console.log(resp.val().savedRecipes))}>for kek</button>
      <div>
        <h4>Ингредиенты</h4>

        <div>
          {props.constructorData.addedFood.length === 0 && (
            <div>
              <p>Ты не добавил ни одного ингредиента для блюда.</p>
            </div>
          )}

          {props.constructorData.addedFood.map(ingredient => {
            return (
            <div>
              <img src={ingredient.img} alt={ingredient.title} />
              {ingredient.title} {ingredient.weight}
              {props.editingWeight !==  ingredient.title 
                && <span onClick={() => {props.switchEditingWeight(ingredient.title)}}>(Изменить)</span>}
              {props.editingWeight ===  ingredient.title 
                && <EditIngredientForm ingredient={ingredient}
                                      editIngredientAndCalculate={props.editIngredientAndCalculate}
                                      cancelEditing={props.switchEditingWeight}/>}
              <button onClick={() => {props.deleteIngredientAndCalculate(ingredient)}}>Удалить</button>
            </div>)
          })}
        </div>

        <div>
          <button onClick={() => props.setShowModal(true)}>Добавить</button>
        </div>
      </div>

      <div>
        <h4>Итого:</h4>
        <p>Общая калорийность блюда: 
          {Number.isInteger(props.constructorData.totalCalories) 
          ? props.constructorData.totalCalories
          : props.constructorData.totalCalories.toFixed(1)} 
         ккал</p>
        <p>Общий вес сырой заготовки: 
          {props.constructorData.totalWeight >= 1000
          ? (props.constructorData.totalWeight / 1000).toFixed(2)
          : props.constructorData.totalWeight}
          {props.constructorData.totalWeight >= 1000
          ? <span>кг</span>
          : <span>грамм</span>}
        </p>
        {!props.savingRecipe && 
          <button onClick={() => props.switchSavingRecipe(true)}>Сохранить рецепт</button>
        }
        {props.savingRecipe && 
          <SavingRecipeForm 
            ingredients={props.constructorData.addedFood} 
            calories={props.constructorData.totalCalories} 
            weight={props.constructorData.totalWeight}
            saveRecipe={props.saveRecipe}/>
        }
      </div>

      <React.Fragment>
        { props.modalData.showModal && !props.modalData.openFoodCategory && (
          <Modal>
            <FoodCategoriesListContainer addToRecipe={true}/>
          </Modal> 
        )}
        { props.modalData.showModal && props.modalData.openFoodCategory && (
          <Modal>
            <FoodCategoryContainer categoryLink={props.modalData.foodCategoryLink}/>
          </Modal> 
        )}
      </React.Fragment>
    </div>
  )
}
export default RecipeConstructor