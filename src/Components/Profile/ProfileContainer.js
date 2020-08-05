import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {updateUserData} from './../../redux/userPersonalData'
import { Redirect } from "react-router-dom";

class ProfileContainer extends React.Component {
  render() {
console.log(this.props)
    if (!this.props.isAuthorized) {
      return <Redirect to='/login' />
    }

    return (
      <Profile {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthorized: state.authReducer.isAuth,
  userData: state.userPersonalData,
  calculatorsData: state.calculatorsReducer
})

export default connect(mapStateToProps, {updateUserData})(ProfileContainer)