import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import AntDesignUploadFormik from '../../../common/ForForms/antDesignForFormik/AntDesignUploadFormik'
import classes from './SavingRecipeForm.module.css'
import {IngredientTitleInput} from './../../../common/ForForms/FormikInputs'
import './../../../../App.css'

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
          
          <IngredientTitleInput
            className={classes.input}
          />

          <div className={classes.savingRecipeImg}>
            <Field 
              as={AntDesignUploadFormik} 
              className={classes.uploadRecipeCover}
              name='img' 
              setImgData={(file) => form.setFieldValue('img', file)}
            />
            <p>Если хочешь добавить собственную обложку рецепта, не забудь загрузить картинку</p>
          </div>

          <button 
            type='submit' 
            name='submit' 
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