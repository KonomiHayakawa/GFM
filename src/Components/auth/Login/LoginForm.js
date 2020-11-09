import React from 'react'
import classes from './Login.module.css'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import {AntInput, AntInputPassword} from './../../common/antDesignForFormik/antDesignForFormik'
import {Alert} from 'antd'

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
    props.login(formValue.email, formValue.password)
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
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
            />
          </div>
        
          <button 
            className={classes.sendFormBtn} 
            type='submit' 
            name='submit'
          >
            Войти
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

export default LoginForm