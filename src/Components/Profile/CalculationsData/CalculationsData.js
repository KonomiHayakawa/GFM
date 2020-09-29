import React from 'react'
import CalculationsDataEditingForm from './CalculationsDataEditingForm'
import ErrorMessage from '../../common/ErrorMessage'
import BMIExplanation from './../../personalCalculators/BodyMassIndexCalculator/BMIExplanation'
import { NavLink } from 'react-router-dom'


const CalculationsData = (props) => {

  return (
    <div>
      <span>Информация для индивидуальных рассчетов:</span>

      {!props.userData.bodyMassIndex && !props.userData.dailyWater && !props.userData.bodyMassIndex 
        ? <div>
            Здесь будут храниться твои данные: рост, вес и тд. А еще - результаты
            индивидуальных рассчетов. Пока что здесь пусто, но чтобы это исправить, переходи
            к <NavLink to='/personalCalculators'>калькуляторам</NavLink> и узнай свои показатели :)
          </div>
        : <UserCalculationData {...props} />
      }
    </div>
  )
}

const UserCalculationData = (props) => {
  return (
    <React.Fragment>
      { props.editingMode
        ? <CalculationsDataEditingForm 
            userData={props.userData} 
            editCalculationsData={props.editCalculationsData}
            cancelEditing={props.switchEditingMode}
          />
        : <div> 
            <button onClick={() => props.switchEditingMode(true)}>Редактировать</button>
            <div>
              {props.userData.sex && 
                <span>
                  Пол:
                  {props.userData.sex === 'male' && 'мужской'}
                  {props.userData.sex === 'female' && 'женский'}
                </span>
              }
            </div>
            <div>
            {props.userData.weight && <span>Вес: {props.userData.weight}</span>}
            </div>
            <div>
            {props.userData.height && <span>Рост: {props.userData.height}</span>}
            </div>
            <div>
            {props.userData.age && <span>Возраст: {props.userData.age}</span>}
            </div>
            <div>
              {props.userData.activityType && 
                <span>
                  Активность: 
                  {props.userData.activityType === '1.2' && <span>минимальный уровень</span>}
                  {props.userData.activityType === '1.375' && <span>низкий уровень</span>}
                  {props.userData.activityType === '1.55' && <span>средний уровень</span>}
                  {props.userData.activityType === '1.725' && <span>высокий уровень</span>}
                  {props.userData.activityType === '1.9' && <span>очень высокий уровень</span>}
                </span>
              }
            </div>
          </div>
      }

      Твои личные показатели:
      <div>
        {props.userData.dailyCalories && <span>Дневная норма калорий: {props.userData.dailyCalories}</span>}
      </div>
      <div>
        {props.userData.dailyWater && <span>Дневная норма воды: {props.userData.dailyWater}</span>}
      </div>
      <div>
      {props.userData.bodyMassIndex &&
        <div>
          <button onClick={() => props.toggleShowBMIExplanation(!props.showBMIExplanation)}>
            ?
          </button>
          Индекс массы тела: {props.userData.bodyMassIndex}
          {props.showBMIExplanation && <BMIExplanation />}
        </div>
      }

      </div>
      {props.errorMessage && <ErrorMessage />}
  </React.Fragment>
  )
}


export default CalculationsData