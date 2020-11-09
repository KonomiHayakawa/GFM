import React from 'react'
import {AntDesignUploadFormik} from './../antDesignForFormik/AntDesignUploadFormik'
import './../../../App.css'
import classes from './UploadNewImageForm.module.css'

const UploadNewImageForm = (props) => {
  return (
    <div>
      <AntDesignUploadFormik 
        setImgData={(file) => props.setImgData(file)}
        className={classes.uploadInput}
      />
      <button 
        className={`${classes.btn} globalBtn`}
        onClick={() => props.forLoading()}
      >
        Сохранить
      </button>
      <button 
        className={`${classes.btn} globalBtn`}
        onClick={() => props.forCancel()}
      >
        Отмена
      </button>
    </div>
  )
}

export default UploadNewImageForm