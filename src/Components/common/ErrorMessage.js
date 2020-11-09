import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { notification } from 'antd';
import {clearError} from './../../redux/forError'

const ErrorMessage = (props) => {
  
  const openNotification = () => {
    notification.error({
      message: 'Упс!',
      description: `${props.errorMessage}`,
      onClose: props.clearError()
    })
  }

  useEffect(() => {
    if (props.errorMessage) {
      openNotification()
    }
  }, [props.errorMessage])

  return (
    <></>
  )
}

const mapStateToProps = (state) => ({
  errorMessage: state.forError.errorMessage,
})

export default connect(mapStateToProps, {clearError})(ErrorMessage)




