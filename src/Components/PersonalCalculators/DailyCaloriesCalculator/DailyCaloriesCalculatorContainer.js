import React, { useState } from 'react'
import DailyCalories from './DailyCaloriesCalculator'
import {setDailyCalories, saveDailyCalories} from '../../../redux/userPersonalData'
import { connect } from 'react-redux'
import {calcDailyCalories} from './../../common/calculations'

const DailyCaloriesContainer = (props) => {

  const [isChangingData, toggleIsChangingData] = useState(false)

  const updateCalories = (form) => {
    const calories = calcDailyCalories(form)
    props.userData.isAuth
      ? props.saveDailyCalories(props.userData.userId, form.gender, form.weight, form.height, form.age, form.activityLevel, Math.round(calories))
      : props.setDailyCalories(Math.round(calories))
    toggleIsChangingData(false)
  }

    return (
      <DailyCalories 
        dailyCalories={props.dailyCalories}
        updateCalories={updateCalories}
        isChangingData={isChangingData}
        toggleIsChangingData={toggleIsChangingData}/>
    )
}

const mapStateToProps = (state) => {
  return {
    userData: state.authReducer,
    dailyCalories: state.userPersonalData.dailyCalories,
  }
}

export default connect(mapStateToProps, {saveDailyCalories, setDailyCalories})(DailyCaloriesContainer)