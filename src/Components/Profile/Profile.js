import React from 'react'
import classes from './Profile.module.css'


const Profile = (props) => {
console.log(props)
  return (
    <div>
      <div>
        <div>
          {/* <img className={classes.avatar} src='https://image.freepik.com/free-vector/_102172-32.jpg' alt='avatar' /> */}
          <img className={classes.avatar} src={props.userData.mainData.avatar} alt='avatar' />
        </div>
        <div>
          {props.userData.mainData.name}
        </div>
      </div>
      <div>
          My sex
          <p>{props.userData.sex}</p>
        </div>
      <div>
          My weight
          <p>{props.userData.weight}</p>
        </div>
        <div>
          My height
          <p>{props.userData.height}</p>
        </div>
        <div>
          My age
          <p>{props.userData.age}</p>
        </div>
        <div>
          My activity
          <p>{props.userData.activityType}</p>
        </div>
      <div>
        <div>
          My daily calories
          <p>{props.userData.dailyCalories}</p>
        </div>
        <div>
          My daily water
          <p>{props.userData.dailyWater}</p>
        </div>
      </div>
      <div>
        My personal data for calculation
      </div>
      <div>
        {/* <button onClick={() => {props.updateUserData('alice', 'https://image.freepik.com/free-vector/_102172-32.jpg'); console.log(props.userData.mainData)}}>add info</button> */}
        {/* <button onClick={() => {props.saveUserParameter(props.userData.id,'age', 45); console.log(props.userData.mainData)}}>add info</button> */}


      </div>
      
    </div>
  )
}

export default Profile