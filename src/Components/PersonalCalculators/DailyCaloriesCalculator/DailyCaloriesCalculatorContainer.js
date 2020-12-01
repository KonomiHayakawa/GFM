import React, { useState } from 'react'
import { connect } from 'react-redux'
import {calcDailyCalories} from '../../common/calculations'
import DailyCaloriesCalculator from './DailyCaloriesCalculator'
import {setError} from './../../../redux/forError'
import {setDailyCalories, saveDailyCalories} from '../../../redux/userPersonalData'

const DailyCaloriesContainer = (props) => {
  const [isChangingData, toggleIsChangingData] = useState(false)

  const updateCalories = (form) => {
    const calories = calcDailyCalories(form)
    if (props.userData.isSignedIn) {
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
      error={props.error}
      isChangingData={isChangingData}
      toggleIsChangingData={toggleIsChangingData}
      updateCalories={updateCalories}
    />
  )
}

const mapStateToProps = (state) => ({
  dailyCalories: state.userPersonalData.dailyCalories,
  error: state.forError.error,
  userData: state.authReducer,
})

export default connect(mapStateToProps, {saveDailyCalories, setDailyCalories, setError})(DailyCaloriesContainer)