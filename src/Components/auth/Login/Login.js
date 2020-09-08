import React from 'react'
import classes from './Login.module.css'
import { Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'

const Login = (props) => {
  if (props.isAuth === true) {
    return <Redirect to={'/profile'}/>
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.info}>
        {props.welcomeText} на сайте позволит сохранять твои личные показатели и отслеживать изменения в весе
      </div>
      <div>
        <LoginForm button={props.button} action={props.action} />
      </div>
    </div>
  )
}



export default Login