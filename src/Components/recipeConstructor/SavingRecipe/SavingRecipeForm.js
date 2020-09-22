import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

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
      {() => (
        <Form>
          <div>
            <Field name='title' type='text' placeholder='Название блюда'></Field>
            <ErrorMessage component='div' name='title' />
          </div>
           <div>
            <Field>
              {(props) => <input name='img' type='file' accept='.jpg, .jpeg, .png' onChange={e => props.form.setFieldValue('img', e.target.files[0])}/>}
            </Field>
            <ErrorMessage component='div' name='img' />
          </div>
          
          <div>
            <button type='submit' name="submit">Сохранить</button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SavingRecipeForm