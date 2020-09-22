import React from 'react'

const RecipeCalculations = (props) => {
  return (
    <div>
      <h4>Итого:</h4><button onClick={() => props.toggleShowInfo(!props.showInfo)}>?</button>
      { props.showInfo &&
        <p>
          Хотя в процессе приготовления ингредиенты могут увеличиться или уменьшиться в объеме, 
          на итоговую калорийность это никак не повлияет. Продукты меняют свою массу, в первую очередь, 
          из-за воды, в которой 0 калорий.
          Не забудь разделить итоговые показатели на
          количество порций, ведь так ты точно будешь знать, какой % от твоей дневной нормы займёт такая вкуснятина.
        </p>
      }
      <p>
        Общая калорийность блюда: 
        {
          Number.isInteger(props.nutritionalValue.totalCalories) 
          ? props.nutritionalValue.totalCalories
          : props.nutritionalValue.totalCalories.toFixed(1)
        } ккал
      </p>
      
      <p>Общий вес сырой заготовки: 
        {
          props.nutritionalValue.totalWeight >= 1000
          ? (props.nutritionalValue.totalWeight / 1000).toFixed(2)
          : props.nutritionalValue.totalWeight
        }
        {
          props.nutritionalValue.totalWeight >= 1000
          ? <span>кг</span>
          : <span>грамм</span>
        }
      </p>
{/* 
      <span>Белки: {props.nutritionalValue.totalProteins.toFixed(2)}</span>
      <span>Жиры: {props.nutritionalValue.totalFats.toFixed(2)}</span>
      <span>Углеводы: {props.nutritionalValue.totalCarbs.toFixed(2)}</span> */}

    </div>
  )
}

export default RecipeCalculations