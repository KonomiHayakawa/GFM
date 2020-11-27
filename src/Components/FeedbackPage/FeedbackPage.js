import React from 'react'
import { Result } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
import classes from './FeedbackPage.module.css'
import ErrorMessage from '../common/ErrorMessage/ErrorMessage'
import FeedbackForm from './FeedbackForm'
import {ReactComponent as FeedbackMainImage} from './../../img/feedbackPage/pageMainImage.svg'

const FeedbackPage = (props) => {
  return (
    <div className={classes.wrapper}>

      <div className={classes.mainImageWrapper}>
        <FeedbackMainImage className={classes.mainImage} />
      </div>

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
        title={
          <span className={classes.resultMessageTitle}>
            Сообщение отправлено!
          </span>
        }
        subTitle={
          <span className={classes.resultMessageDescription}>
            Мы ознакомимся с ним в ближайшее время и, в случае необходимости, 
            отправим ответ на указанный имеил :)
          </span>
        }
      />
      }
      {props.error && <ErrorMessage />}
    </>
  )
}

export default FeedbackPage




 