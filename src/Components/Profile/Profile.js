import React from 'react'
import classes from './Profile.module.css'



const Profile = (props) => {
  return (
    <div>
      <div>
        <div>
          <img className={classes.avatar} src='https://image.freepik.com/free-vector/_102172-32.jpg' alt='avatar' />
        </div>
        <div>
          Name
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
      
    </div>
  )
}

export default Profile