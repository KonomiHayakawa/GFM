import React, { useState } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {saveName, saveAvatar} from './../../redux/userPersonalData'
import { Redirect } from "react-router-dom";

// class ProfileContainer extends React.Component {

// // const [editMode , toggleEditMode] = useі

//   render() {
//     if (!this.props.authInfo.isAuth) {
//       return <Redirect to='/login' />
//     }

//     return (
//       <Profile {...this.props}/>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   authInfo: state.authReducer,
//   userData: state.userPersonalData,
// })

const ProfileContainer = (props) => {

  const [editMode , toggleEditMode] = useState(false)
  
  
  if (!props.authInfo.isAuth) {
    return <Redirect to='/login' />
  } 

  return (
    <Profile {...props}
      editMode={editMode}
      toggleEditMode={toggleEditMode}/>
  )


    
}
  
  const mapStateToProps = (state) => ({
    authInfo: state.authReducer,
    userData: state.userPersonalData,
  })
  

export default connect(mapStateToProps, {saveName, saveAvatar})(ProfileContainer)