import React from 'react'
import classes from './LoginPage.module.css'
import { Redirect } from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const LoginPage = (props) => {
  if (props.isAuth === true) {
    return <Redirect to={'/profile'}/>
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.info}>
        {props.welcomeText} на сайте позволит сохранять твои личные показатели и отслеживать изменения в весе
      </div>
      <div>
        <LoginPageForm button={props.button} action={props.action} />
      </div>
    </div>
  )
}

const LoginPageForm = (props) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Required')
      .email('Email address is not correct'),
    password: Yup.string()
      .required('Required'),
  })
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (formValue) => {props.action(formValue.email, formValue.password)},
    validationSchema,
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input {...formik.getFieldProps('email')} className={classes.input} type='text' name='email' placeholder='Введи свой email' />
        {formik.touched.email && formik.errors.email ? <div className={classes.warning}>{formik.errors.email}</div> : null}
      </div>
      <div>
        <input {...formik.getFieldProps('password')} className={classes.input} type='password' name='password' placeholder='Введи пароль' />
        {formik.touched.password && formik.errors.password ? <div className={classes.warning}>{formik.errors.password}</div> : null}
      </div>
      <button className={classes.button} type='submit' name="submit">{props.button}</button>
    </form>
  )

}

export default LoginPage