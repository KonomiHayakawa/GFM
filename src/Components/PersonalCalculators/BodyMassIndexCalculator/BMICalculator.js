import React from 'react'
import BMIForm from './BMIForm'


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
    </div>
  )
}

export default BMICalculator