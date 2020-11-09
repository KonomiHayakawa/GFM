import React from 'react'
import { NavLink } from 'react-router-dom'
import { Alert, Card } from 'antd'
import {EditOutlined} from '@ant-design/icons'
import CalculationsDataEditingForm from './CalculationsDataEditingForm'
import ErrorMessage from '../../common/ErrorMessage'
import classes from './PersonalData.module.css'

const PersonalData = (props) => {
  const welcomeText = 
    <div>
      На этой страничке будут храниться твои данные: рост, вес и тд. Можешь ввести их в режиме
      редактирования или воспользовавшись <NavLink to='/personalCalculators'>калькуляторами</NavLink> :)
    </div>

    const personalInfo = [
      {
        title: 'Пол', 
        cardName: 'sex', 
        innerContent: 
          <>
            {props.userData.sex === 'male' && 'Мужской'}
            {props.userData.sex === 'female' && 'Женский'}
            {!props.userData.sex && 'Пока не указано :('}
          </>
      },
      {
        title: 'Вес', 
        cardName: 'weight', 
        innerContent: 
          <>
            {props.userData.weight || 'Пока не указано :('}
          </>
      },
      {
        title: 'Рост', 
        cardName: 'height', 
        innerContent: 
          <>
            {props.userData.height || 'Пока не указано :('}
          </>
      },
      {
        title: 'Возраст', 
        cardName: 'age', 
        innerContent: 
          <>
            {props.userData.age || 'Пока не указано :('}
          </>
      },
      {
        title: 'Активность', 
        cardName: 'activityType', 
        className: classes.activityInfoCard,
        innerContent: 
          <>
            {props.userData.activityType === '1.2' && <span>Минимальный уровень</span>}
            {props.userData.activityType === '1.375' && <span>Низкий уровень</span>}
            {props.userData.activityType === '1.55' && <span>Средний уровень</span>}
            {props.userData.activityType === '1.725' && <span>Высокий уровень</span>}
            {props.userData.activityType === '1.9' && <span>Очень высокий уровень</span>}
            {!props.userData.activityType && 'Пока не указано :('}
          </>
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
                        infoItem={infoItem} 
                        {...props} 
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
        title={props.infoItem.title} 
        extra={
          <span 
            onClick={() => props.setEditingFieldName(props.infoItem.cardName)}
            className={classes.editInfoCardIco}
          >
            <EditOutlined />
          </span>
        } 
        className={props.infoItem.className || classes.infoCard}
      >
        {props.editingFieldName === props.infoItem.cardName
          ? <CalculationsDataEditingForm 
              userData={props.userData} 
              editPersonalData={props.editPersonalData}
              cancelEditing={props.setEditingFieldName}
              editingField={props.infoItem.cardName}
            /> 
          : <>
              {props.infoItem.innerContent}
            </>
        }
      </Card>
              {/* <Select defaultValue='Минимальный уровень активности' style={{ width: 120 }} onChange={handleChange}>
            <Option value='1.2'>Минимальный уровень активности</Option>
            <Option value='1.375'>Низкий уровень активности'</Option>
            <Option value='1.55'>Средний уровень активности</Option>
            <Option value='1.725'>Высокий уровень</Option>
            <Option value='1.9'>Очень высокий</Option>
          </Select> */}
  </>
  )
}


export default PersonalData



