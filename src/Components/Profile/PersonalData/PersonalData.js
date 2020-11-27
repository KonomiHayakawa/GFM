import React from 'react'
import { NavLink } from 'react-router-dom'
import { Alert, Card } from 'antd'
import {EditOutlined} from '@ant-design/icons'
import classes from './PersonalData.module.css'
import CalculationsDataEditingForm from './CalculationsDataEditingForm'
import ErrorMessage from '../../common/ErrorMessage/ErrorMessage'

const PersonalData = (props) => {
  const welcomeText = 
    <div>
      На этой страничке будут храниться твои данные: рост, вес и тд. Они появятся, как только ты 
      воспользуешься одним из <NavLink to='/personalCalculators'>калькуляторов</NavLink> :)
    </div>

  const personalInfo = [
    {
      title: 'Пол',
      cardName: 'sex', 
      innerContent:
        (props.userData.sex === 'male' && 'Мужской') ||
        (props.userData.sex === 'female' && 'Женский')
    },
    {
      title: 'Вес',
      cardName: 'weight', 
      innerContent: props.userData.weight
    },
    {
      title: 'Рост',
      cardName: 'height', 
      innerContent: props.userData.height
    },
    {
      title: 'Возраст',
      cardName: 'age', 
      innerContent: props.userData.age
    },
    {
      title: 'Активность',
      cardName: 'activityType', 
      className: classes.activityInfoCard,
      innerContent:  
        (props.userData.activityType === '1.2' && 'Минимальный уровень') ||
        (props.userData.activityType === '1.375' && 'Низкий уровень') ||
        (props.userData.activityType === '1.55' && 'Средний уровень') ||
        (props.userData.activityType === '1.725' && 'Высокий уровень') ||
        (props.userData.activityType === '1.9' && 'Очень высокий уровень')
    },
  ]

  return (
    <>
      { !props.userData.sex &&
        !props.userData.weight && 
        !props.userData.height && 
        !props.userData.age && 
        !props.userData.activityType
          ? <div className={classes.welcomeTextWrapper}>
              <Alert
                message='Здесь пока пусто :('
                description={welcomeText}
                type="info"
                showIcon
                className={classes.welcomeText}
              />
            </div>
          : <div className={classes.infoCardsWrapper}>
              <div className={classes.infoCards}>
                {personalInfo.map(
                  infoItem => {
                    return (
                      <PersonalDataInfoCard
                        {...props} 
                        infoItem={infoItem}  
                        key={infoItem.cardName}
                      />
                    )
                  }
                )}
              </div>
            </div>
      }
      {props.error && <ErrorMessage />}
    </>
  )
}

const PersonalDataInfoCard = (props) => {

  return (
    <>
      <Card 
        className={
          props.infoItem.className || classes.infoCard
        }
        title={
          <span className={classes.cardTitle}>
            {props.infoItem.title}
          </span>
        }
        extra={
          <span 
            onClick={() => props.setEditingFieldName(props.infoItem.cardName)}
            className={classes.editInfoCardIco}
          >
            <EditOutlined className={classes.editIco}/>
          </span>
        } 
      >
        {props.editingFieldName === props.infoItem.cardName
          ? <CalculationsDataEditingForm 
              userData={props.userData} 
              editPersonalData={props.editPersonalData}
              cancelEditing={props.setEditingFieldName}
              editingField={props.infoItem.cardName}
            /> 
          : <>
              <div className={classes.cardInfo}>
                {props.infoItem.innerContent  || 'Пока не указано :('}
              </div>
            </>
        }
      </Card>
    </>
  )
}


export default PersonalData