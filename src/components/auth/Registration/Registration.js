import React from 'react'
import classes from './Registration.module.css'
import RegistrationForm from './RegistrationForm'
import {ReactComponent as RegistrationMainImage} from './../../../img/auth/registrationMainImage.svg'

const Registration = (props) => {
  return (
    <div className={classes.wrapper}>

      <div className={classes.mainImageWrapper} >
        <RegistrationMainImage className={classes.mainImage}/>
      </div>

      <div className={classes.registrationFormWrapper}>
        <RegistrationForm 
          addNewUserMainData={props.addNewUserMainData} 
          className={classes.registrationForm}
          createNewAccount={props.createNewAccount}
        />
      </div>

    </div>
  )
}

export default Registration