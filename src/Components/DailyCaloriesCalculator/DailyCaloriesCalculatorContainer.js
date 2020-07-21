import React from 'react'
import DailyCalories from './DailyCaloriesCalculator'
import {setDailyCalories, saveDailyCalories} from '../../redux/calculatorsReducer'
import { connect } from 'react-redux'

class DailyCaloriesContainer extends React.Component {

  calculateCalories = (form) => {
    return form.gender === 'male' 
    ? (88.36 + (13.4 * form.weight) + (4.8 * form.height) - (5.7 * form.age)) * form.activityLevel
    : (447.6 + (9.2 * form.weight) + (3.1 * form.height) - (4.3 * form.age)) * form.activityLevel
  }

  updateCalories = (form) => {
    const calories = this.calculateCalories(form)
    this.props.userData.isAuth
    ? this.props.saveDailyCalories(this.props.userData.userId, Math.round(calories))
    : this.props.setDailyCalories(Math.round(calories))
  }

  render() {
    return <DailyCalories dailyCalories={this.props.dailyCalories} updateCalories={this.updateCalories}/>
  }
}



const mapStateToProps = (state) => {
  return {
    userData: state.authReducer,
    dailyCalories: state.calculatorsReducer.dailyCalories,
  }
}

export default connect(mapStateToProps, {saveDailyCalories, setDailyCalories})(DailyCaloriesContainer)