import React, { useState } from 'react'
import DailyWaterCalculator from './DailyWaterCalculator'
import { connect } from 'react-redux'
import {setDailyWater, saveDailyWater} from '../../../redux/userPersonalData'
import {calcDailyWater} from '../../common/calculations'
import {setError} from './../../../redux/forError'

const DailyWaterCalculatorContainer = (props) => {

  const [isChangingData, toggleIsChangingData] = useState(false)

  const updateDailyWater = (form) => {
    const dailyWater = calcDailyWater(form)
    props.userData.isAuth
    ? props.saveDailyWater(props.userData.userId, form.sex, form.weight, dailyWater)
      .catch((error) => props.setError(error))
    : props.setDailyWater(dailyWater)
    toggleIsChangingData(false)
  }

  return (
    <DailyWaterCalculator 
      dailyWater={props.dailyWater} 
      updateDailyWater={updateDailyWater}
      isChangingData={isChangingData}
      toggleIsChangingData={toggleIsChangingData}/>
  )
  
}

const mapStateToProps = (state) => {
  return ({
    userData: state.authReducer,
    dailyWater: state.userPersonalData.dailyWater,
    errorMessage: state.forError.errorMessage
  })
}

export default connect(mapStateToProps, {setDailyWater, saveDailyWater, setError})(DailyWaterCalculatorContainer)