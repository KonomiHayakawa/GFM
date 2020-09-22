import React from 'react'
import classes from './Registration.module.css'
import RegistrationForm from './RegistrationForm'

const Registration = (props) => {

  return (
    <div className={classes.wrapper}>
      <div className={classes.info}>
        Регистрация на сайте позволит сохранять твои личные показатели и отслеживать изменения в весе
      </div>
      <div>
        <RegistrationForm signUp={props.signUp} addNewUserMainData={props.addNewUserMainData}/>
      </div>
    </div>
  )
}



export default Registration