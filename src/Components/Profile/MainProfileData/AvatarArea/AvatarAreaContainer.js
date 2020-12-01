import React, { useState } from 'react'
import { connect } from 'react-redux'
import AvatarArea from './AvatarArea'
import {addAvatarFile, getAvatarLink, deleteAvatarFile} from './../../../../queries/personalData'
import {saveAvatar} from './../../../../redux/userPersonalData'
import { setError } from '../../../../redux/forError'

const AvatarAreaContainer = (props) => {
  const [editingAvatar, switchEditingAvatar] = useState(false)
  const [userAvatar, setUserAvatar] = useState('')

  const changeAvatar = () => {
    try {
      addAvatarFile(props.userId, userAvatar)
        .then(() => getAvatarLink(props.userId))
        .then((avatarLink) => props.saveAvatar(avatarLink))
        .then(() => setUserAvatar(''))
        .then(() => switchEditingAvatar(false))
    } catch (error) {
      props.setError(error)
    }
  }

  const deleteAvatar = () => {
    try {
      deleteAvatarFile(props.userId)
        .then(() => props.saveAvatar(null))
    } catch (error) {
      props.setError(error)
    }
  }

  return (
    <AvatarArea
      changeAvatar={changeAvatar}
      deleteAvatar={deleteAvatar}
      editingAvatar={editingAvatar}
      mainData={props.mainData}
      switchEditingAvatar={switchEditingAvatar}
      setUserAvatar={setUserAvatar}
    />
  )
}

const mapStateToProps = (state) => ({
  mainData: state.userPersonalData.mainData,
  userId: state.authReducer.userId,
})

export default connect(mapStateToProps, {saveAvatar, setError})(AvatarAreaContainer)