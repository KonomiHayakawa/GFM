import React from 'react'
import classes from './CalculatorsPage.module.css'
import DailyCaloriesContainer from '../DailyCaloriesCalculator/DailyCaloriesCalculatorContainer'
import DailyWaterCalculatorContainer from '../DailyWaterCalculator/DailyWaterCalculatorContainer'
import BMICalculatorContainer from '../BodyMassIndexCalculator/BMICalculatorContainer';

const CalculatorsPage = (props) => {

  return (
    <div className={classes.calculatorsPage}>
      <DailyCaloriesContainer />
      <DailyWaterCalculatorContainer />
      <BMICalculatorContainer />
    </div>
  )
}

export default CalculatorsPage