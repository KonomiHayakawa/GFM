import React from 'react'
import classes from './DailyCalories.module.css'

const DailyCalories = (props) => {
  console.log(props.kek)
  return (
    <div>
      DailyCalories
      <div>
        Ваш пол:
        {/* <input type='radio' id='male' checked></input>
        <label for="male">Male</label>
        <input type='radio' id='female' value='Female' checked></input>
        <label for="female">Female</label> */}
      </div>
      <div>
        Рост:
          <input type='text' placeholder='180'></input>
        Вес:
          <input type='text' placeholder='75'></input>
        Возвраст:
          <input type='text' placeholder='30'></input>
        Уровень ежедневной активности:
          <select>
            <option>Минимальный уровень активности</option>
            <option>Низкий уровень активности</option>
            <option>Средний уровень активности</option>
            <option>Высокий уровень</option>
            <option>Очень высокий</option>
          </select>
      </div>
      <div>
        Ваша дневная норма:
      </div>
    </div>
  )
}

export default DailyCalories