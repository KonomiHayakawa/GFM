import React from 'react'
import CalculationsDataEditingForm from './CalculationsDataEditingForm'
import ErrorMessage from '../../common/ErrorMessage'

const CalculationsData = (props) => {
  return (
    <div>
      <span>Информация для индивидуальных рассчетов</span>
      <button onClick={() => props.switchEditingMode(true)}>Редактировать</button>
      { props.editingMode
        ? <CalculationsDataEditingForm 
            userData={props.userData} 
            editCalculationsData={props.editCalculationsData}
            cancelEditing={props.switchEditingMode}
          />
        : <div> 
          <div>
            My sex: {props.userData.sex}
          </div>
          <div>
            My weight: {props.userData.weight}
          </div>
          <div>
            My height: {props.userData.height}
          </div>
          <div>
            My age: {props.userData.age}
          </div>
          <div>
            My activity: 
              {props.userData.activityType === '1.2' && <span>Минимальный уровень активности</span>}
              {props.userData.activityType === '1.375' && <span>Низкий уровень активности</span>}
              {props.userData.activityType === '1.55' && <span>Средний уровень активности</span>}
              {props.userData.activityType === '1.725' && <span>Высокий уровень</span>}
              {props.userData.activityType === '1.9' && <span>Очень высокий</span>}
          </div>
        </div>
      }
      <div>
        My daily calories: {props.userData.dailyCalories}
      </div>
      <div>
        My daily water: {props.userData.dailyWater}
      </div>
      <div>
        My Body Mass Index: {Number(props.userData.bodyMassIndex).toFixed(2)}
      </div>
      {props.errorMessage && <ErrorMessage />}
    </div>
  )
}



export default CalculationsData