import React from 'react'
import classes from './Login.module.css'
import LoginForm from './LoginForm'

const Login = (props) => {

  return (
    <div className={classes.wrapper}>
      <div className={classes.info}>
        Войди в свой аккаунт, чтобы сохранять созданные рецепты и результаты индивидуальных рассчетов
      </div>
      <div>
        <LoginForm login={props.login} />
      </div>
    </div>
  )
}



export default Login