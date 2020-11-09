import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import classes from './FeedbackPage.module.css'
import {AntInput, AntInputTextArea} from './../common/antDesignForFormik/antDesignForFormik'

const FeedbackForm = (props) => {

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Не пропускай это поле!')
      .min(3, 'Минимальная длина - 3 символов'),
    email: Yup.string()
      .required('Не пропускай это поле!')
      .email('Некорректный адрес'),
    feedbackDescription: Yup.string()
      .required('Не пропускай это поле!')
      .max(150, 'Максимум 150 символов'),
  })
  
  const initialValues = {
    name: '',
    email: '',
    feedbackDescription: '',
  }

  const onSubmit = (formData) => {
    props.sendFeedbackMessage(formData)
  }
  
  return ( 
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {() => (
        <Form>
          <div className={classes.inputWrapper}>
            <Field 
              component={AntInput} 
              style={{width: '100%', borderBottom: '1px solid  #3fa9ff9c'}}
              type='text' 
              name='name' 
              placeholder='Имя' 
              bordered={false}
            /> 
          </div>

          <div className={classes.inputWrapper}>
            <Field 
              component={AntInput} 
              style={{width: '100%', borderBottom: '1px solid  #3fa9ff9c'}}
              type='email' 
              name='email' 
              placeholder='Email' 
              bordered={false}
            /> 
          </div>

          <div className={classes.inputWrapper}>
            <Field 
              component={AntInputTextArea}
              bordered={false}
              type='text'
              name='feedbackDescription'
              id='feedbackDescription'
              placeholder='Твое сообщение...' 
              autoSize={{ minRows: 4, maxRows: 5 }}
              style={{width: '100%', border: '1px solid  #3fa9ff9c'}}
            >
            </Field>
          </div>

          <div>
            <button 
              className={classes.sendMessageBtn} 
              type='submit' 
              name="submit"
            >
              Отправить
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FeedbackForm


