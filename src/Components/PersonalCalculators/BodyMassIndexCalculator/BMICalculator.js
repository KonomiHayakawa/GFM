import React from 'react'
import BMIForm from './BMIForm'
import ErrorMessage from '../../common/ErrorMessage'


const BMICalculator = (props) => {

  return (
    <div>
      { !props.bodyMassIndex || props.isChangingData
        ? (
          <div>
            <p>Узнать индекс массы тела:</p>
            <BMIForm updateBMI={props.updateBMI}/>
          </div>)
        : (
          <div>
            <div>
              Твой ИМС: 
            </div>
            <div>
              {props.bodyMassIndex.toFixed(2)}
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

export default BMICalculator