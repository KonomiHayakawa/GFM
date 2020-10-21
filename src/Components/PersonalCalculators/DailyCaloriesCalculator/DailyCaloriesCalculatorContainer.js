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
    if (props.userData.isAuth) {
      try {
        props.saveDailyCalories(props.userData.userId, form, Math.round(calories))
      } catch (error) {
        props.setError(error)
        console.log(error)
      }
    } else {
      props.setDailyCalories(Math.round(calories))
    }
    toggleIsChangingData(false)
  }

    return (
      <DailyCaloriesCalculator 
        dailyCalories={props.dailyCalories}
        updateCalories={updateCalories}
        isChangingData={isChangingData}
        toggleIsChangingData={toggleIsChangingData}
        error={props.error}
      />
    )
}

const mapStateToProps = (state) => {
  return {
    userData: state.authReducer,
    dailyCalories: state.userPersonalData.dailyCalories,
    error: state.forError.error,
  }
}

export default connect(mapStateToProps, {saveDailyCalories, setDailyCalories, setError})(DailyCaloriesContainer)