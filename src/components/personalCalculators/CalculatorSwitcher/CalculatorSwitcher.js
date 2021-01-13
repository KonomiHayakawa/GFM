import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './CalculatorSwitcher.module.css'

const CalculatorSwitcher = (props) => {
  return (
    <div className={classes.calculatorOption}>
      <NavLink 
        to={props.option.link}
        className={classes.link}
      >
        <img 
          className={classes.calculatorOptionImg} 
          src={props.option.img} 
          alt={props.option.link}
        />
        <span 
          className={classes.calculatorOptionTitle}
        >
          {props.option.title}
        </span>
      </NavLink>
    </div>
  )
}

export default CalculatorSwitcher