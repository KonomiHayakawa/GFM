import React from 'react'
import classes from './CalculatorSwitcher.module.css'

const CalculatorSwitcher = (props) => {
  return (
    <div onClick={() => props.setChosenCalculator(props.option.name)} className={classes.calculatorOption}>
      <img className={classes.calculatorOptionImg} src={props.option.img} alt={props.option.name}/>
      <span className={classes.calculatorOptionTitle}>{props.option.title}</span>
    </div>
  )
}

export default CalculatorSwitcher