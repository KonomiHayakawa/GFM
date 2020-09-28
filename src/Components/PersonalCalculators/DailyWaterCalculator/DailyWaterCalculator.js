import React from 'react'
import classes from './DailyWaterCalculator.module.css'
import DailyWaterForm from './DailyWaterCalculatorForm'
import ErrorMessage from '../../common/ErrorMessage'

const DailyWaterCalculator = (props) => {
  return (
    <div>
      { !props.dailyWater || props.isChangingData
        ? (
          <div>
            <h2 className={classes.title}>
              Рассчитать дневную норму воды
            </h2>
            <h4>
              Введи пол и вес, чтобы узнать свою дневную норму воды.
            </h4>
            <DailyWaterForm forSubmit={props.updateDailyWater}/>
          </div>
        )
        : (
          <div>
            <div>
              Твоя дневная норма воды: {props.dailyWater} л.
            </div>
            <div>
              <button onClick={() => props.toggleIsChangingData(true)}>
                Посчитать заново
              </button>
            </div>
          </div>
        )
      }
      {props.errorMessage && <ErrorMessage />}
    </div>
  )
}

export default DailyWaterCalculator