import React from 'react'
import classes from './DailyWaterCalculator.module.css'
import DailyWaterForm from './DailyWaterCalculatorForm'

const DailyWaterCalculator = (props) => {
  return (
    <div>
      <h2 className={classes.title}>
        Рассчитать дневную норму воды
      </h2>
      <h4>
        Введи пол и вес, чтобы узнать свою дневную норму воды.
      </h4>
      <DailyWaterForm forSubmit={(obj) => props.updateDailyWater(obj)}/>
      { props.dailyWater
        ? <div>
            <div>
              Твоя дневная норма:
            </div>
            <div>
              {props.dailyWater} л.
            </div>
          </div>
        : null
      }
    </div>
  )
}



export default DailyWaterCalculator