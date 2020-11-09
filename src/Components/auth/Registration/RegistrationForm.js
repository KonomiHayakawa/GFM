import React from 'react'
import classes from './Registration.module.css'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import {Alert} from 'antd'
import {AntInput, AntInputPassword} from './../../common/antDesignForFormik/antDesignForFormik'

const RegistrationForm = (props) => {

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Обязательное поле')
      .email('Некорректный адрес'),
    password: Yup.string()
      .required('Обязательное поле')
      .min(6, 'Минимальная длина - 6 символов'),
    passwordConfirmation: Yup.string()
      .required('Обязательное поле')
      .oneOf([Yup.ref('password'), null], 'Введенные пароли должны совпадать!'),
    nickname: Yup.string()
      .required('Обязательное поле')
      .max(10, 'Максимум - 10 символов')
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

          <div className={classes.inputWrapper}>
            <Field 
              component={AntInput} 
              style={{width: '100%', borderBottom: '1px solid  #3fa9ff9c'}}
              type='text' 
              name='email' 
              placeholder='Email' 
              bordered={false}
            /> 
          </div>

          <div className={classes.inputWrapper}>
            <Field 
              component={AntInputPassword} 
              style={{width: '100%'}}
              className={classes.password} 
              type='password' 
              name='password' 
              bordered={false}
            />
          </div>

          <div className={classes.inputWrapper}>
            <Field 
              component={AntInputPassword} 
              style={{width: '100%'}}
              className={classes.password} 
              type='password' 
              name='passwordConfirmation' 
              bordered={false}
              placeholder='Пароль (еще раз)'
            />
          </div>

          <div className={classes.inputWrapper}>
            <Field 
              component={AntInput} 
              style={{width: '100%', borderBottom: '1px solid  #3fa9ff9c'}}
              type='text' 
              name='nickname' 
              placeholder='Никнейм' 
              bordered={false}
            /> 
          </div>

          <button 
            className={classes.sendFormBtn} 
            type='submit' 
            name='submit'
          >
            Создать аккаунт
          </button>

          {FormikProps.errors.general
            ? <div className={classes.generalErrors}>
                <Alert 
                  message={FormikProps.errors.general} 
                  type="error" 
                  showIcon
                  banner={true}
                />
              </div>
            : null
          }
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm