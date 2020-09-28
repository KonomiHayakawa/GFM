import React from 'react'
import classes from './Profile.module.css'
import MyRecipesContainer from './MyRecipes/MyRecipesContainer'
import CalculationsDataContainer from './CalculationsData/CalculationsDataContainer'
import MainProfileDataContainer from './MainProfileData/MainProfileDataContainer'

const Profile = (props) => {
  return (
    <div>
      <MainProfileDataContainer/>
      <CalculationsDataContainer />
      <MyRecipesContainer/>
    </div>
  )
}

export default Profile
