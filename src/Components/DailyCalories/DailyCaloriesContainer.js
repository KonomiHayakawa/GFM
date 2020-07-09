import React from 'react'
import DailyCalories from './DailyCalories'
import {addDailyCaloriesInfo} from './../../redux/userPersonalData'
import { connect } from 'react-redux'

class DailyCaloriesContainer extends React.Component {
   
  render() {
    return <DailyCalories {...this.props}/>
  }
}

mapStateToProps = (state) => {
  return {
    dailyCaloriesInfo: state.userPersonalData.dailyCaloriesInfo
  }
}

export default connect(mapStateToProps, {addDailyCaloriesInfo})(DailyCaloriesContainer)