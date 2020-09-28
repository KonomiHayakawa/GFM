import React, { useState } from 'react'
import { connect } from 'react-redux'
import MainProfileData from './MainProfileData'
import {saveName, saveAvatar} from './../../../redux/userPersonalData'
import {addAvatarFile, getAvatarLink, deleteAvatarFile, getDefaultAvatarLink} from './../../../queries/personalData'
import { setError } from '../../../redux/forError'
import { Ripple } from 'react-preloaders'

const MainProfileDataContainer = (props) => {

  const [editingName, switchEditingName] = useState(false)
  const [editingAvatar, switchEditingAvatar] = useState(false)
  const [userAvatar, setUserAvatar] = useState('')

  const changeName = (name) => {
    props.saveName(name)
    switchEditingName(false)
  }

  const changeAvatar = () => {
    addAvatarFile(props.userId, userAvatar)
    .then(() => getAvatarLink(props.userId))
    .then((avatarLink) => props.saveAvatar(avatarLink))
    .then(() => switchEditingAvatar(false))
    .catch((error) => props.setError(error))
  }

  const deleteAvatar = () => {
    deleteAvatarFile(props.userId)
    .then(() => getDefaultAvatarLink())
    .then((avatarLink) => props.saveAvatar(avatarLink))
    .catch((error) => props.setError(error))
  }

  return (
    <React.Fragment>
    <MainProfileData
      {...props} 
      editingName={editingName} 
      switchEditingName={switchEditingName} 
      changeName={changeName}
      changeAvatar={changeAvatar}
      editingAvatar={editingAvatar}
      switchEditingAvatar={switchEditingAvatar}
      setUserAvatar={setUserAvatar}
      deleteAvatar={deleteAvatar}
      errorMessage={props.errorMessage}
    />
    <Ripple customLoading={false}/> 
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  mainData: state.userPersonalData.mainData,
  userId: state.authReducer.userId,
  email: state.authReducer.userEmail,
  errorMessage: state.forError.errorMessage
})

export default connect(mapStateToProps, {saveName, saveAvatar, setError})(MainProfileDataContainer)