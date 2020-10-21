import React from 'react'
import { Table } from 'antd';
import AddingIngredientFieldContainer from '../../recipeConstructor/ChoosingIngredients/AddingIngredient/AddingIngredientFieldContainer'


const FoodCategoryTable = (props) => {

  const columns = [
    {
      dataIndex: 'img',
      key: 'img',
      render: link => <img src={link} alt='foodItem' />,
    },
    {
      dataIndex: 'title',
      width: '30%',
      key: 'title',
    },
    {
      title: 'Белки',
      dataIndex: 'proteins',
      key: 'proteins',
    },
    {
      title: 'Жиры',
      dataIndex: 'fats',
      key: 'fats',
    },
    {
      title: 'Углеводы',
      dataIndex: 'carbohydrates',
      key: 'carbohydrates',
    },
    {
      title: 'Ккал',
      dataIndex: 'calories',
      key: 'calories',
    },
    {
      key: 'button',
      render: (foodItem) => {
        return (<AddingIngredientFieldContainer 
          addRecipeButton={props.addRecipeButton} 
          foodItem={foodItem}
        />)
      }
    }
  ]
  return (
    <Table 
      columns={columns} 
      pagination={false} 
      dataSource={props.foodData}
      rowKey={foodItem => foodItem.id}
    />
  )
}

export default FoodCategoryTable