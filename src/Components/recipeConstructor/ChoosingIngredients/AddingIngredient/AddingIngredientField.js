import React from 'react'
import {isMobile} from 'react-device-detect'
import { Modal } from 'antd'
import AddingIngredientForm from './AddingIngredientForm'
import classes from './AddingIngredient.module.css'
import './../../../../App.css'

const AddingIngredientField =(props) => {
  return isMobile 
    ? <ForMobile {...props} />
    : <ForDesktop {...props}/>
} 

export default AddingIngredientField

const ForDesktop = (props) => {
  return props.addedId.includes(props.foodItem.id)
    ? <button 
        onClick={() => props.cancelAddingIngredient(props.foodItem.id)}
        className={`${classes.cancelAddingBtn} globalBtn`}
      >
        Отмена
      </button>
    : <span>
        <AddingIngredientForm
          foodId={props.foodItem.id} 
          addIngredientToRecipe={props.addIngredientToRecipe}
        />
      </span> 
}

const ForMobile = (props) => {
  return (
    <>
      {props.isMobileModalOpened && <ModalForMobile {...props}/>}
      {props.addedId.includes(props.foodItem.id)
        ? <button 
            onClick={() => props.cancelAddingIngredient(props.foodItem.id)}
            className={`${classes.cancelAddingBtn} globalBtn`}
          >
            Отмена
          </button>
        : <button onClick={() => props.setMobileModalOpened(true)} className={`${classes.cancelAddingBtn} globalBtn`}>
            Добавить
          </button> 
      }
    </>
  )
}

const ModalForMobile = (props) => {

  return (
    <>
      <Modal
        bodyStyle={{height: '550px'}}
        closable={false}
        centered={true}
        footer={
          <button 
            className={`${classes.cancelAddingBtn} globalBtn`}
            onClick={() => props.setMobileModalOpened(false)}
          >
            Отмена
          </button>
        }
        onOk={() => props.setMobileModalOpened(false)}
        title={
          <span 
            style={{fontSize:'3rem'}}
          >
            Добавить ингредиент
          </span>
        }
        visible={props.isMobileModalOpened}
        width='80vw'
      >
        <AddingIngredientForm
          addIngredientToRecipe={props.addIngredientToRecipe}
          foodId={props.foodItem.id} 
          setMobileModalOpened={props.setMobileModalOpened}
        />
      </Modal>
    </>
  )
}