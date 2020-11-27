import React from 'react'
import {CaretLeftOutlined} from '@ant-design/icons'
import classes from './BackArrow.module.css'

const BackArrow = (props) => {
  return (
    <div 
      onClick={() => props.clickAction()} 
      className={classes.wrapper}
    >
      <CaretLeftOutlined /> НАЗАД 
    </div>
  )
}

export default BackArrow