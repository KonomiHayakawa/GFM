import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import classes from './Ingredients.module.css'
import './../../../App.css'
import {AntInput} from "./../../common/antDesignForFormik/antDesignForFormik";

const EditIngredientForm = (props) => {
  const validationSchema = Yup.object({
    newWeight: Yup.number()
    .typeError('Введи число')
    .positive('Ты точно добавишь больше нуля грамм:)')
    .required('Обязательное поле'),
  })
  
  const initialValues = {
    newWeight: '',
    ingredient: props.ingredient
  }

  const onSubmit = (formData) => {
    props.editIngredientAndCalculate(formData.ingredient, Number(formData.newWeight))
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {() => (
        <Form>
            <Field 
              component={AntInput} 
              style={{width: '100%'}} 
              placeholder='вес в граммах'
              name='newWeight' 
              id={props.ingredient.id} 
              type='number' 
            />
            <Field 
              type='hidden' 
              name="ingredient" 
            />
            
          <div>
            <button 
              className={`${classes.editingBtn} globalBtn` }
              type='submit' 
              name="submit"
            >
              Изменить
            </button>
            <button 
              className={`${classes.editingBtn} globalBtn` }
              type='reset' 
              name="cancel" 
              onClick={() => {props.cancelEditing()}}
            >
              Отмена
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default EditIngredientForm