import React from 'react'
import classes from './Registration.module.css'
import RegistrationForm from './RegistrationForm'
import {ReactComponent as RegistrationMainImage} from './../../../img/auth/registrationMainImage.svg'

const Registration = (props) => {

  return (
    <div className={classes.wrapper}>
      <RegistrationMainImage className={classes.mainImage} />
      <div className={classes.registrationFormWrapper}>
        <RegistrationForm 
          signUp={props.signUp} 
          addNewUserMainData={props.addNewUserMainData} 
          className={classes.registrationForm}
        />
      </div>
    </div>
  )
}



export default Registration