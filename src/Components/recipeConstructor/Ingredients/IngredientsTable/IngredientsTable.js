import React from 'react'
import { Table, Popconfirm, message } from 'antd'
import {isMobile} from 'react-device-detect'
import classes from './../Ingredients.module.css'
import './../../../../App.css'
import EditIngredientForm from './../EditIngredientForm'

const IngredientsTable = (props) => {
  
  const editingField = props.showEditingField
    ? { key: 'action',
        width: '45%',
        render: (text, ingredient) => (
          <>
            {props.editingWeight !==  ingredient.id && 
              <button 
                onClick={() => {props.switchEditingWeight(ingredient.id)}} 
                className={`${classes.editBtn} globalBtn`}
              >
                Изменить
              </button>
            }
            {!props.showIngredientsArea && !props.editingWeight &&
              <DeleteIngredientMobile 
                {...props} 
                ingredient={ingredient}
              />
 
            }
            {props.editingWeight === ingredient.id && 
              <EditIngredientForm 
                ingredient={ingredient}
                editIngredientAndCalculate={props.editIngredientAndCalculate}
                cancelEditing={props.switchEditingWeight}
              />
            }
          </>
        )
      }
    : {}

  const columns = [
    {
      dataIndex: 'img',
      key: 'img',
      render: link => <img src={link} alt='ingredient' className={classes.ingredientImg} />,
      width: '5%',
    },
    {
      title: 'Ингредиент',
      dataIndex: 'title',
      key: 'title',
      className:classes.tableCol,
      width: '40%',
    },
    {
      title: 'Вес г.',
      dataIndex: 'weight',
      key: 'weight',
      className:classes.tableCol,
      width: '10%',
    },
    {
      ...editingField
    },
  ]

  return (
    <Table 
      columns={columns} 
      className={classes.ingredientsTable}
      dataSource={props.addedFood}
      ellipsis={true}
      pagination={false} 
      rowKey={ingredient => ingredient.id}
    />
  )
}

export default IngredientsTable

const DeleteIngredientMobile = (props) => {

 const confirmDeletingIngredient = (ingredient) => {
  props.deleteIngredientAndCalculate(ingredient)
  message.success('Удалено! :)');
}

  return (
    isMobile
      ? <button 
          className={`${classes.deleteBtn} globalBtn`}
          onClick={() => confirmDeletingIngredient(props.ingredient)}
        > 
          Удалить
        </button>
      : <Popconfirm
          cancelText='Нет'
          title='Точно удалить?'
          onConfirm={() => confirmDeletingIngredient(props.ingredient)}
          onCancel={() => null}
          okText='Да'
        >
          <button 
            className={`${classes.deleteBtn} globalBtn`}
          > 
            Удалить
          </button>
        </Popconfirm>
  )
}