import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const UpdateRecipeForm = (props) => {
  
  const initialValues = {
    img: props.recipe.img,
  }


  const onSubmit = (formData) => {
    props.updateRecipeImg(formData)
  }

  
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize={true} >
      {() => (
        <Form>
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

export default UpdateRecipeForm