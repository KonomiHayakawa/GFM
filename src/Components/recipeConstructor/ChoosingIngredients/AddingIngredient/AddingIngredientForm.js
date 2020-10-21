import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import {AntInput} from '../../../common/antDesignForFormik/antDesignForFormik'
import classes from './AddingIngredient.module.css';

const AddingIngredientForm = (props) => {
  const validationSchema = Yup.object({
    weight: Yup.number()
    .typeError('Введи число')
    .positive('Ты точно добавишь больше нуля грамм:)')
    .required('Обязательное поле'),
  })
  
  const initialValues = {
    weight: '',
    ingredientId: props.foodId,
  }


  const onSubmit = (formData) => {
    props.addIngredientToRecipe({...formData, weight: Number(formData.weight) })
  }
  
  return (
    
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {(props) => (
        <Form>
          <Field 
            component={AntInput} 
            style={{ width: '100%'}} 
            placeholder='вес в граммах'
            name='weight' 
            id={props.foodId} 
            type='number' 
          />
          <Field 
            type='hidden' 
            name='productId' 
          />

          {props.values.weight &&
            <button 
              type='submit' 
              name="submit"
              className={classes.addIngredientBtn}
            >
              Добавить
            </button>
          }
           
        </Form>
      )}
    </Formik>
  )
}

export default AddingIngredientForm


