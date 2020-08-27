import React from 'react'
import DailyWaterCalculator from './DailyWaterCalculator'
import { connect } from 'react-redux'
import {setDailyWater, saveDailyWater} from './../../redux/userPersonalData'


class DailyWaterCalculatorContainer extends React.Component {

  calculateWater = (form) => {
    const milliliters = form.gender === 'male' 
      ? form.weight * 35
      : form.weight * 31
    return (milliliters / 1000).toFixed(1)
  }

  updateDailyWater = (form) => {
    const dailyWater = this.calculateWater(form)
    this.props.userData.isAuth
    ? this.props.saveDailyWater(this.props.userData.userId, form.gender, form.weight, dailyWater)
    : this.props.setDailyWater(dailyWater)
  }

  render() {
    return (
      <DailyWaterCalculator dailyWater={this.props.dailyWater} updateDailyWater={this.updateDailyWater}/>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    userData: state.authReducer,
    dailyWater: state.userPersonalData.dailyWater,
  })
}

export default connect(mapStateToProps, {setDailyWater, saveDailyWater})(DailyWaterCalculatorContainer)