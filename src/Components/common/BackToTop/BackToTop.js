import React from 'react'
import {VerticalAlignTopOutlined} from '@ant-design/icons'
import classes from './BackToTop.module.css'

const BackToTop = (props) => {
  return (
    <>
      {props.showScroll &&
        <div 
          onClick={() => props.goToTop()} 
          className={classes.backToTopArrowWrapper}
        >
          <VerticalAlignTopOutlined className={classes.backToTopArrow}/> 
        </div>
      }
    </>
  )
}

export default BackToTop