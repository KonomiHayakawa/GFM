import React from 'react'
import classes from './Login.module.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

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
    props.action(formValue.email, formValue.password)
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          actions.setFieldError('general', 'Указанный адрес уже используется для другого аккаунта');
        } else if (error.code === 'auth/user-not-found') {
          actions.setFieldError('general', 'Неверный адрес электронной почты');
        } else if (error.code === 'auth/wrong-password') {
          actions.setFieldError('general', 'Неверный пароль');
        } else {
          actions.setFieldError('general', 'Произошла неизвестная ошибка. Попробуй еще раз!');
        }
      })
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {(FormikProps) => (
        <Form>
          <div>
            <Field className={classes.input} type='text' name='email' placeholder='Введи свой email' />
            <ErrorMessage component='div' className={classes.warning} name='email' />
          </div>
          <div>
            <Field className={classes.input} type='password' name='password' placeholder='Введи пароль' />
            <ErrorMessage component='div' className={classes.warning} name='password'/>
          </div>
          <div>
            <button className={classes.button} type='submit' name="submit">{props.button}</button>
            <div className={classes.generalWarning}>{FormikProps.errors.general}</div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm