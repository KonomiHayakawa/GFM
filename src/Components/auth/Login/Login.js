import React from 'react'
import classes from './Login.module.css'
import LoginForm from './LoginForm'
import {ReactComponent as LoginMainImage} from './../../../img/auth/loginMainImage.svg'

const Login = (props) => {
  return (
    <div className={classes.wrapper}>

      <div className={classes.mainImageWrapper}>
        <LoginMainImage 
          className={classes.mainImage} 
        />
      </div>

      <div className={classes.loginFormWrapper}>
        <LoginForm 
          login={props.login} 
          className={classes.loginForm} 
        />
      </div>
      
    </div>
  )
}

export default Login