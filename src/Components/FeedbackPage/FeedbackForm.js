import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import classes from './FeedbackPage.module.css'
import './../../App.css'
import {NickNameInput, EmailInput, MessageInput} from './../common/ForForms/FormikInputs'

const FeedbackForm = (props) => {

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Не пропускай это поле!')
      .min(3, 'Минимум 3 символа'),
    email: Yup.string()
      .required('Не пропускай это поле!')
      .email('Некорректный адрес'),
    message: Yup.string()
      .required('Не пропускай это поле!')
      .max(150, 'Максимум 150 символов'),
  })
  
  const initialValues = {
    name: '',
    email: '',
    message: '',
  }

  const onSubmit = (formData) => {
    props.sendFeedbackMessage(formData)
  }
  
  return ( 
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {() => (
        <Form className={classes.form}>

          <NickNameInput
            name='name' 
          />

          <EmailInput />

          <MessageInput
            autoSize={{ minRows: 4, maxRows: 5 }}
          />

          <div>
            <button 
              className={`${classes.sendMessageBtn} globalBtn`} 
              type='submit' 
              name='submit'
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