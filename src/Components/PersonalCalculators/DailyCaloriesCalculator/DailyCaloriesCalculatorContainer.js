import React, { useState } from 'react'
import DailyCaloriesCalculator from './DailyCaloriesCalculator'
import {setDailyCalories, saveDailyCalories} from '../../../redux/userPersonalData'
import { connect } from 'react-redux'
import {calcDailyCalories} from '../../common/calculations'
import {setError} from './../../../redux/forError'

const DailyCaloriesContainer = (props) => {

  const [isChangingData, toggleIsChangingData] = useState(false)

  const updateCalories = (form) => {
    const calories = calcDailyCalories(form)
    props.userData.isAuth
      ? props.saveDailyCalories(props.userData.userId, form.sex, form.weight, form.height, form.age, form.activityLevel, Math.round(calories))
        .catch((error) => props.setError(error))
      : props.setDailyCalories(Math.round(calories))
    toggleIsChangingData(false)
  }

    return (
      <DailyCaloriesCalculator 
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
    errorMessage: state.forError.errorMessage,
  }
}

export default connect(mapStateToProps, {saveDailyCalories, setDailyCalories, setError})(DailyCaloriesContainer)