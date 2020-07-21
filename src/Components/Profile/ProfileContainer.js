import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";

class ProfileContainer extends React.Component {
  render() {
    return (
      <Profile calories={this.props.calculatorsData.dailyCalories} />
    )
  }
}

const mapStateToProps = (state) => ({
  calculatorsData: state.calculatorsReducer
})

export default connect(mapStateToProps, {})(ProfileContainer)