import React from 'react'
import { Table } from 'antd'
import AddingIngredientFieldContainer from '../../recipeConstructor/choosingIngredients/AddingIngredient/AddingIngredientFieldContainer'
import classes from './FoodCategoryTable.module.css'

const FoodCategoryTable = (props) => {
  const columns = [
    {
      dataIndex: 'img',
      key: 'img',
      render: link => {
        return <img 
          src={link} 
          alt='foodItem' 
          className={classes.foodItemImg} 
        />
      },
    },
    {
      dataIndex: 'title',
      width: '30%',
      key: 'title',
      className:classes.foodCategoryTableCol,
    },
    {
      title: 'Белки',
      dataIndex: 'proteins',
      key: 'proteins',
      className:classes.foodCategoryTableCol,
    },
    {
      title: 'Жиры',
      dataIndex: 'fats',
      key: 'fats',
      className:classes.foodCategoryTableCol,
    },
    {
      title: 'Углеводы',
      dataIndex: 'carbohydrates',
      key: 'carbohydrates',
      className:classes.foodCategoryTableCol,
    },
    {
      
      title: 'Ккал',
      dataIndex: 'calories',
      key: 'calories',
      className:classes.foodCategoryTableCol
    },
    {
      key: 'button',
      shouldCellUpdate: () => false,
      className:`${classes.foodCategoryTableCol}`,
      render: (foodItem) => {
        if (props.addRecipeButton) {
          return (
            <AddingIngredientFieldContainer 
              foodItem={foodItem}
            />
          )
        }
      }
    },
  ]
  
  return (
    <Table 
      columns={columns} 
      dataSource={props.foodData}
      rowKey={foodItem => foodItem.id}
      pagination={false} 
    />
  )
}

export default FoodCategoryTable