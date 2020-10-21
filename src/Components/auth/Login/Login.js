import React from 'react'
import classes from './Login.module.css'
import LoginForm from './LoginForm'

const Login = (props) => {
  return (
    <div className={classes.wrapper}>
      <LoginForm login={props.login} />
    </div>
  )
}

export default Login