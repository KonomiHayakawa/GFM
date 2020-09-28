import React from 'react'
import CalculationsDataEditingForm from './CalculationsDataEditingForm'
import ErrorMessage from '../../common/ErrorMessage'
import BMIExplanation from './../../personalCalculators/BodyMassIndexCalculator/BMIExplanation'

const CalculationsData = (props) => {
  return (
    <div>

      <span>Информация для индивидуальных рассчетов</span>
      

      { props.editingMode
        ? <CalculationsDataEditingForm 
            userData={props.userData} 
            editCalculationsData={props.editCalculationsData}
            cancelEditing={props.switchEditingMode}
          />
        : <div> 
            <button onClick={() => props.switchEditingMode(true)}>Редактировать</button>
            <div>
              Пол: 
              {props.userData.sex === 'male' && 'мужской'}
              {props.userData.sex === 'female' && 'женский'}
            </div>
            <div>
              Вес: {props.userData.weight}
            </div>
            <div>
              Рост: {props.userData.height}
            </div>
            <div>
              Возраст: {props.userData.age}
            </div>
            <div>
              Активность: 
                {props.userData.activityType === '1.2' && <span>минимальный уровень</span>}
                {props.userData.activityType === '1.375' && <span>низкий уровень</span>}
                {props.userData.activityType === '1.55' && <span>средний уровень</span>}
                {props.userData.activityType === '1.725' && <span>высокий уровень</span>}
                {props.userData.activityType === '1.9' && <span>очень высокий уровень</span>}
            </div>
          </div>
      }
      <div>
        Дневная норма калорий: {props.userData.dailyCalories}
      </div>
      <div>
        Дневная норма воды: {props.userData.dailyWater}
      </div>
      <div>
        Индекс массы тела: {Number(props.userData.bodyMassIndex).toFixed(2)}
        <button onClick={() => props.toggleShowBMIExplanation(!props.showBMIExplanation)}>
          ?
        </button>
        {props.showBMIExplanation && <BMIExplanation />}
      </div>
      {props.errorMessage && <ErrorMessage />}
    </div>
  )
}



export default CalculationsData