import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import {Alert} from 'antd'
import classes from './Login.module.css'
import './../../../App.css'
import {EmailInput, PasswordInput} from '../../common/ForForms/FormikInputs'

const LoginForm = (props) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Обязательное поле')
      .email('Некорректный адрес'),
    password: Yup.string()
      .required('Обязательное поле'),
  })

  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit = (formValue, actions) => {
    try {
    props.login(formValue.email, formValue.password)
    } 
    catch(error) { 
      if (error.code === 'auth/user-not-found') {
        actions.setFieldError('general', 'Неверный адрес электронной почты');
      } else if (error.code === 'auth/wrong-password') {
        actions.setFieldError('general', 'Неверный пароль');
      } else {
        actions.setFieldError('general', 'Произошла неизвестная ошибка. Попробуй еще раз!');
      }
    }
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {(FormikProps) => (
        <Form className={classes.form}>

          <EmailInput />
          
          <PasswordInput />
        
          <button 
            className={`${classes.sendFormBtn} globalBtn `} 
            name='submit'
            type='submit' 
          >
            Войти
          </button>

          {FormikProps.errors.general ? 
            ( <Alert 
                banner={true}
                className={classes.generalErrors}
                message={FormikProps.errors.general} 
                showIcon
                type="error" 
              />
            ) : (
              null
            )
          }
     
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm