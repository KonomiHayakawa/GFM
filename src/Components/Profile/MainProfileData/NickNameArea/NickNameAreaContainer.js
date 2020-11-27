import React, { useState } from 'react'
import { connect } from 'react-redux'
import NickNameArea from './NickNameArea'
import {saveName} from './../../../../redux/userPersonalData'
import { setError } from '../../../../redux/forError'

const NickNameAreaContainer = (props) => {
 
  const [editingName, switchEditingName] = useState(false)
  const [userName, setUserName] = useState('')

  const changeName = () => {
    if (userName.length === 0) {
      switchEditingName(false)
    } else {
      try {
        props.saveName(userName)
        switchEditingName(false)
      } catch (error) {
        props.setError(error)
      }
    }  
  }

  return (
    <NickNameArea
      changeName={changeName}
      editingName={editingName} 
      error={props.error}
      mainData={props.mainData}
      switchEditingName={switchEditingName} 
      setUserName={setUserName}
    />
  )
}

const mapStateToProps = (state) => ({
  mainData: state.userPersonalData.mainData,
  userId: state.authReducer.userId,
  error: state.forError.error
})

export default connect(mapStateToProps, {saveName, setError})(NickNameAreaContainer)