import React from 'react'
import classes from './DailyWaterCalculator.module.css'

const DailyWaterCalculator = (props) => {
  return (
    <div>
      <h2 className={classes.title}>
        Рассчитать дневную норму воды
      </h2>
      <h4>
        Введи свой вес и 
      </h4>
    </div>
  )
}

export default DailyWaterCalculator