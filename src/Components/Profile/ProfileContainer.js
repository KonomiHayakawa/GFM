import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


const ProfileContainer = (props) => {
  
  if (!props.authInfo.isAuth) {
    return <Redirect to='/login' />
  } 

  return (
    <div>
    <Profile {...props}/>
    </div>
  )
   
}
  
  const mapStateToProps = (state) => ({
    authInfo: state.authReducer,
    userData: state.userPersonalData,
  })
  

export default connect(mapStateToProps, {})(ProfileContainer)