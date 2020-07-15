import React from 'react'
import classes from './LoginPage.module.css'
import { Form, Field } from 'react-final-form'
import {Input} from '../common/inputsValidation/ControlledInputs'
import {composeValidators, required, minLength} from './../common/inputsValidation/validators'


const LoginPage = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.info}>
        {props.welcomeText} на сайте позволит сохранять твои личные показатели и отслеживать изменения в весе
      </div>
      <div>
      <Form onSubmit={(formValue) => {props.action(formValue.email, formValue.password)}}>
        {({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <div><Field component={Input} validate={required} className={classes.input} type='text' name='email' placeholder='Введи свой email' /></div>
            <div><Field component={Input} validate={composeValidators(required, minLength(6))} className={classes.input} type='password' name='password' placeholder='Введи пароль' /></div>
            <button className={classes.button} type='submit' name="submit">{props.button}</button>
          </form>
        )}
      </Form>
      </div>
    </div>
  )
}

export default LoginPage