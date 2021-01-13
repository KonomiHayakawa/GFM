import React, { useState } from 'react'
import DailyWaterCalculator from './DailyWaterCalculator'
import { connect } from 'react-redux'
import {calcDailyWater} from '../../common/calculations'
import {setError} from '../../../redux/forError'
import {setDailyWater, saveDailyWater} from '../../../redux/userPersonalData'

const DailyWaterCalculatorContainer = (props) => {
  const [isChangingData, toggleIsChangingData] = useState(false)

  const updateDailyWater = (form) => {
    const dailyWater = calcDailyWater(form)
    if (props.userData.isSignedIn) {
      try {
        props.saveDailyWater(props.userData.userId, form, dailyWater)
      } catch (error) {
        props.setError(error)
      }
    } else {
      props.setDailyWater(dailyWater)
    }
    toggleIsChangingData(false)
  }

  return (
    <DailyWaterCalculator 
      dailyWater={props.dailyWater} 
      error={props.error}
      isChangingData={isChangingData}
      toggleIsChangingData={toggleIsChangingData}
      updateDailyWater={updateDailyWater}
    />
  )
}

const mapStateToProps = (state) => ({
  dailyWater: state.userPersonalData.dailyWater,
  error: state.forError.error,
  userData: state.authReducer,
})

export default connect(mapStateToProps, {setDailyWater, saveDailyWater, setError})(DailyWaterCalculatorContainer)