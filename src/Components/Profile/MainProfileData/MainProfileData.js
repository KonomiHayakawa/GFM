import React from 'react'
import classes from './MainProfileData.module.css'
import AvatarAreaContainer from './AvatarArea/AvatarAreaContainer'
import ErrorMessage from '../../common/ErrorMessage/ErrorMessage'
import NickNameAreaContainer from './NickNameArea/NickNameAreaContainer'

const MainProfileData = (props) => {

  return (
    <div className={classes.wrapper}>

      <AvatarAreaContainer />
      <NickNameAreaContainer />

      {props.error && <ErrorMessage />}
      
    </div>
  )
}

export default MainProfileData