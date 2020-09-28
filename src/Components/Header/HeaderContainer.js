import React from 'react'
import Header from "./Header";
import { connect } from 'react-redux';
import {signOut} from './../../redux/authReducer'

const HeaderContainer = (props) => {

  return (
    <Header {...props}/>
  )
  
}

const mapStateToProps = (state) => ({
  userData: state.authReducer,
})

export default connect(mapStateToProps, {signOut})(HeaderContainer)