import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {saveName} from './../../../redux/userPersonalData'
import {signUp} from '../../../redux/authReducer'
import Registration from './Registration'

const RegistrationContainer = (props) => {
  if (props.authData.isSignedIn === true) {
    return <Redirect to={'/profile'}/>
  }

  const createNewAccount = async(formData) => {
    await props.signUp(formData.email, formData.password)
    props.saveName(formData.nickname)
  }

  return (
    <Registration 
      createNewAccount={createNewAccount}
    />
  )
}

const mapStateToProps = (state) => ({
  authData: state.authReducer
})

export default connect(mapStateToProps, {saveName, signUp})(RegistrationContainer)