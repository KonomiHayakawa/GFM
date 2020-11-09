import React, { useState } from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import { Redirect, withRouter} from "react-router-dom"


const ProfileContainer = (props) => {

  const pathParts = props.location.pathname.split('/')
  const currentTab = pathParts[pathParts.length - 1]

  const [selectedNavItem, setSelectedNavItem] = useState(currentTab)

  if (!props.authInfo.isAuth) {
    return <Redirect to='/login' />
  } 

  return (
    <Profile 
      {...props}
      selectedNavItem={selectedNavItem}
      setSelectedNavItem={setSelectedNavItem}
    />
  ) 
}
  
  const mapStateToProps = (state) => ({
    authInfo: state.authReducer,
    userData: state.userPersonalData,
  })
  

export default withRouter(connect(mapStateToProps, {})(ProfileContainer))