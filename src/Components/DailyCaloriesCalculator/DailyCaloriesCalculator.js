import React from 'react'
import classes from './DailyCaloriesCalculator.module.css'
import DailyCaloriesForm from './DailyCaloriesForm'


const DailyCalories = (props) => {
  return (
    <div>
      <h2 className={classes.title}>
        Рассчитать дневную норму калорий
      </h2>
      <h4 className={classes.explanation}>
        Введи свои данные ниже и узнай, сколько калорий в день тебе можно съедать со спокойной душой
      </h4>
        <DailyCaloriesForm forSubmit={(obj) => props.updateCalories(obj)}/>
      { props.dailyCalories 
        ? <div className={classes.resultBlock}>
            <div>
              Твоя дневная норма:
            </div>
            <div className={classes.resultField}>
              {props.dailyCalories} ккал
            </div>
          </div>
        : null
      }
    </div>
  )
}



export default DailyCalories