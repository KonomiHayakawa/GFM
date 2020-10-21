import React from 'react'
import ErrorMessage from '../common/ErrorMessage'
import FeedbackForm from './FeedbackForm'

const FeedbackPage = (props) => {
  return (
    <div>
      {!props.successMessage &&
        <FeedbackForm sendFeedbackMessage={props.sendFeedbackMessage}/>
      }
      {props.successMessage &&
        <div>Сообщение отправлено! Мы ознакомимся с ним в ближайшее время и, в случае необходимости, 
          отправим ответ на указанный имеил :)
        </div>
      }
      {props.error && <ErrorMessage />}
    </div>
  )
}


export default FeedbackPage