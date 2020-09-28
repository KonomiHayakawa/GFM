import React, { useState } from 'react'
import { connect } from 'react-redux'
import FeedbackPage from './FeedbackPage'
import {addFeedbackMessage} from '../../queries/general'
import { v4 as uuidv4 } from 'uuid'

const FeedbackPageContainer = (props) => {

  const [successMessage, setSuccessMessage] = useState(false)

  const sendFeedbackMessage = (formData) => {
    const messageId = uuidv4()
    addFeedbackMessage(messageId, formData)
    setSuccessMessage(true)
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

})

export default connect(mapStateToProps, {})(FeedbackPageContainer)