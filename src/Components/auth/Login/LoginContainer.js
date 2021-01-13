import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {login} from '../../../redux/authReducer'
import Login from './Login'

const LoginContainer = (props) => {
  if (props.loginData.isSignedIn === true) {
    return <Redirect to={'/profile'}/>
  }
  
  return (
    <Login 
      login={props.login}
    />
  ) 
}

const mapStateToProps = (state) => ({
  loginData: state.authReducer
})

export default connect(mapStateToProps, {login})(LoginContainer)