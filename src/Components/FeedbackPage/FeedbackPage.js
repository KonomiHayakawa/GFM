import React from 'react'
import ErrorMessage from '../common/ErrorMessage'
import FeedbackForm from './FeedbackForm'
import {ReactComponent as FeedbackMainImage} from './../../img/feedbackPage/pageMainImage.svg'
import classes from './FeedbackPage.module.css'
import { Result } from 'antd'
import { SmileOutlined } from '@ant-design/icons'

const FeedbackPage = (props) => {
  return (
    <div className={classes.wrapper}>
      <FeedbackMainImage className={classes.mainImage} />
      <div className={classes.messageFieldWrapper}>
        <MessageField {...props} />
      </div>
    </div>
  )
}

const MessageField = (props) => {
  return (
    <>
      {!props.successMessage &&
        <FeedbackForm 
          sendFeedbackMessage={props.sendFeedbackMessage}
        />
      }
      {props.successMessage &&
        <Result
        icon={<SmileOutlined />}
        title='Сообщение отправлено!'
        subTitle='Мы ознакомимся с ним в ближайшее время и, в случае необходимости, 
        отправим ответ на указанный имеил :)'
      />
      }
      {props.error && <ErrorMessage />}
    </>
  )
}

export default FeedbackPage




 