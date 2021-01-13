import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {Alert} from 'antd'
import classes from './Registration.module.css'
import './../../../App.css'
import {EmailInput, PasswordInput, NickNameInput} from '../../common/ForForms/FormikInputs'

const RegistrationForm = (props) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Обязательное поле')
      .email('Некорректный адрес'),
    password: Yup.string()
      .required('Обязательное поле')
      .min(6, 'Минимум 6 символов'),
    passwordConfirmation: Yup.string()
      .required('Обязательное поле')
      .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать!'),
    nickname: Yup.string()
      .required('Обязательное поле')
      .max(10, 'Максимум 10 символов')
      .min(3, 'Минимум 3 символa'),
  })

  const initialValues = {
    email: '',
    password: '',
    passwordConfirmation: '',
    nickname: '',
  }

  const onSubmit = (formData, actions) => {
    props.createNewAccount(formData)
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          actions.setFieldError('general', 'Указанный адрес уже используется для другого аккаунта')
        } else if (error.code === 'auth/user-not-found') {
          actions.setFieldError('general', 'Неверный адрес электронной почты')
        } else if (error.code === 'auth/wrong-password') {
          actions.setFieldError('general', 'Неверный пароль')
        } else {
          actions.setFieldError('general', 'Произошла неизвестная ошибка. Попробуй еще раз!')
        }
      })
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {(FormikProps) => (
        <Form className={classes.form}>
          <EmailInput />

          <PasswordInput />

          <PasswordInput 
            name='passwordConfirmation' 
            placeholder='Пароль (еще раз)' 
          />

          <NickNameInput />

          <button 
            className={`${classes.sendFormBtn} globalBtn` } 
            name='submit'
            type='submit' 
          >
            Создать аккаунт
          </button>

          {FormikProps.errors.general ? ( 
            <Alert 
              banner={true}
              type='error' 
              message={FormikProps.errors.general} 
              showIcon
              className={classes.generalErrors}
            />
          ) : (
            null
          )}
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm