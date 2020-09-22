import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {signUp} from '../../../redux/authReducer'
import Registration from './Registration';
import {saveName, saveAvatar} from './../../../redux/userPersonalData'


const RegistrationContainer = (props) => {

  if (props.authData.isAuth === true) {
    return <Redirect to={'/profile'}/>
  }

  const addNewUserMainData = (nickname) => {
    const defaultAvatar = 'https://firebasestorage.googleapis.com/v0/b/goodfoodmood-b0f8c.appspot.com/o/default%2FdefaultAvatar.png?alt=media&token=e3375b62-ae97-4cc9-8571-219a212ceb79'
    props.saveName(nickname)
    .then(() => props.saveAvatar(defaultAvatar))
  }

  return (
    <Registration {...props} addNewUserMainData={addNewUserMainData}/>
  )
}

const mapStateToProps = (state) => ({
  authData: state.authReducer
})

export default connect(mapStateToProps, {saveName, saveAvatar, signUp})(RegistrationContainer)