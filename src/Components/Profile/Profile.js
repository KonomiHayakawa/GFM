import React from 'react'
import classes from './Profile.module.css'

const Profile = (props) => {
// console.log(props)
//   if (!props.isAuthorized) {
//     return <div>loh!!!!</div>
//   }

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
        <div>
          Birthday
        </div>
      </div>
      <div>
        <div>
          My daily calories
          {props.calories}
        </div>
        <div>
          My daily water
        </div>
      </div>
      <div>
        My personal data for calculation
      </div>
      <div>
        <button onClick={() => {props.updateUserData('alice', 'https://image.freepik.com/free-vector/_102172-32.jpg'); console.log(props.userData.mainData)}}>add info</button>
      </div>
      
    </div>
  )
}

export default Profile