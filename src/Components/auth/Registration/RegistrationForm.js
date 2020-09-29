import React from 'react'
import classes from './Registration.module.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const RegistrationForm = (props) => {

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Обязательное поле')
      .email('Некорректный адрес'),
    password: Yup.string()
      .required('Обязательное поле')
      .min(6, 'Минимальная длина - 6 символов'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Введенные пароли должны совпадать!'),
    nickname: Yup.string()
      .required('Обязательное поле')
      .min(3, 'Минимальная длина - 3 символа')
  })

  const initialValues = {
    email: '',
    password: '',
    passwordConfirmation: '',
    nickname: '',
  }

  const onSubmit = (formValue, actions) => {
    props.signUp(formValue.email, formValue.password)
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
      .then((response) => {
        if (response) {
          props.addNewUserMainData(formValue.nickname)
        }
      })
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {(FormikProps) => (
        <Form>
          <div>
            <Field className={classes.input} type='text' name='email' placeholder='Еmail' />
            <ErrorMessage component='div' className={classes.warning} name='email' />
          </div>
          <div>
            <Field className={classes.input} type='password' name='password' placeholder='Пароль' />
            <ErrorMessage component='div' className={classes.warning} name='password'/>
          </div>
          <div>
            <Field className={classes.input} type='password' name='passwordConfirmation' placeholder='Пароль (еще раз)' />
            <ErrorMessage component='div' className={classes.warning} name='passwordConfirmation'/>
          </div>
          <div>
            <Field className={classes.input} type='text' name='nickname' placeholder='Никнейм' />
            <ErrorMessage component='div' className={classes.warning} name='nickname'/>
          </div>
          <div>
            <button className={classes.button} type='submit' name="submit">Создать аккаунт</button>
            <div className={classes.generalWarning}>{FormikProps.errors.general}</div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm