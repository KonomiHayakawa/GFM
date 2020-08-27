import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {updateUserData, setAllUserInfo} from './../../redux/userPersonalData'
import { Redirect } from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
    if (this.props.authInfo.isAuth){
      this.props.setAllUserInfo(this.props.authInfo.userId)
    }
  }

  render() {
    if (!this.props.authInfo.isAuth) {
      return <Redirect to='/login' />
    }

    return (
      <Profile {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  authInfo: state.authReducer,
  userData: state.userPersonalData,
})

export default connect(mapStateToProps, {updateUserData, setAllUserInfo})(ProfileContainer)