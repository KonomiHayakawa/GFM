import React from 'react'
import classes from './PersonalCalculators.module.css'
import DailyCaloriesContainer from './DailyCaloriesCalculator/DailyCaloriesCalculatorContainer'
import DailyWaterCalculatorContainer from './DailyWaterCalculator/DailyWaterCalculatorContainer'
import BMICalculatorContainer from './BodyMassIndexCalculator/BMICalculatorContainer';

const personalCalculators = (props) => {

  return (
    <div className={classes.calculatorsPage}>
      <DailyCaloriesContainer />
      <DailyWaterCalculatorContainer />
      <BMICalculatorContainer />
    </div>
  )
}

export default personalCalculators