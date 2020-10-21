import React, { useState } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import {addFeedbackMessage} from '../../queries/general'
import {setError} from './../../redux/forError'
import FeedbackPage from './FeedbackPage'

const FeedbackPageContainer = (props) => {

  const [successMessage, setSuccessMessage] = useState(false)

  const sendFeedbackMessage = (formData) => {
    const messageId = uuidv4()
    try {
      addFeedbackMessage(messageId, formData)
      setSuccessMessage(true)
    } catch (e) {
      props.setError(e)
    }
  }

  return (
    <FeedbackPage 
      {...props} 
      successMessage={successMessage} 
      sendFeedbackMessage={sendFeedbackMessage}
    />
  )
}

const mapStateToProps = (state) => ({
  error: state.forError.error
})

export default connect(mapStateToProps, {setError})(FeedbackPageContainer)