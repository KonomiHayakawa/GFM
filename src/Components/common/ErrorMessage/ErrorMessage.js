import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { notification } from 'antd'
import {clearError} from '../../../redux/forError'
import classes from './ErrorMessage.module.css'

const ErrorMessage = (props) => {
  useEffect(() => {
    const openNotification = () => {
      notification.error({
        message: <span className={classes.messageTitle}>Упс!</span>,
        description: <span className={classes.messageDescription}>{props.errorMessage}</span>,
        onClose: props.clearError(),
        className: classes.errorMessage,
        closeIcon: <span className={classes.closeIcon}>X</span>,
      })
    }
    if (props.errorMessage) {
      openNotification()
    }
  }, [props])

  return (
    <></>
  )
}

const mapStateToProps = (state) => ({
  errorMessage: state.forError.errorMessage,
})

export default connect(mapStateToProps, {clearError})(ErrorMessage)




