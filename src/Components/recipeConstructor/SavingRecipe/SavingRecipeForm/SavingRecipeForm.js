import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import classes from './SavingRecipeForm.module.css'
import './../../../../App.css'
import {AntInput} from "../../../common/antDesignForFormik/antDesignForFormik";
import AntDesignUploadFormik from '../../../common/antDesignForFormik/AntDesignUploadFormik'

const SavingRecipeForm = (props) => {
  
  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Обязательное поле').max(20),
  })
  
  const initialValues = {
    title: '',
    img: '',
    ingredients: props.ingredients,
    calories: props.calories,
    weight: props.weight,
  }

  const onSubmit = (formData) => {
    props.saveRecipe(formData)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize={true} >
      {(form) => (     
        <Form>
      
          <Field 
            component={AntInput} 
            style={{ width: '30%'}} 
            placeholder='Название блюда'
            name='title' 
            id='title'
            type='text' 
          />
          
          <div className={classes.savingRecipeImg}>
            <Field 
              as={AntDesignUploadFormik} 
              name="img" 
              setImgData={(file) => form.setFieldValue('img', file)}
            />
            <p>Если хочешь добавить собственную обложку рецепта, не забудь загрузить картинку</p>
          </div>

          <button 
            type='submit' 
            name="submit" 
            className={`${classes.saveButton} globalMainBtn`}
          >
            Сохранить
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default SavingRecipeForm