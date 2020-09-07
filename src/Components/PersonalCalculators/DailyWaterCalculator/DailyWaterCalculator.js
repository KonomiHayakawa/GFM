import React from 'react'
import classes from './DailyWaterCalculator.module.css'
import DailyWaterForm from './DailyWaterCalculatorForm'

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
            <DailyWaterForm forSubmit={(obj) => props.updateDailyWater(obj)}/>
          </div>
        )
        : (
          <div>
            <div>
              Твоя дневная норма воды:
            </div>
            <div>
              {props.dailyWater} л.
            </div>
            <div>
              <button onClick={() => props.toggleIsChangingData(true)}>
                Посчитать заново
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default DailyWaterCalculator