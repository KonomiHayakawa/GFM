import React from 'react'
import classes from './Profile.module.css'


const Profile = (props) => {

  return (
    <div>
      {props.editMode 
      ? <div>kek</div>
      : (
        <div>
        <button onClick={() => props.toggleEditMode(true)}>Редактировать профиль</button>
        <div>
          <div>
            <img src={props.userData.mainData.avatar} alt='avatar' className={classes.avatar} />
          </div>
          <div>
            {props.userData.mainData.name}
          </div>
        </div>

        <div>
          <div>
            My sex: {props.userData.sex}
          </div>
          <div>
            My weight: {props.userData.weight}
          </div>
          <div>
            My height: {props.userData.height}
          </div>
          <div>
            My age: {props.userData.age}
          </div>
          <div>
            My activity: {props.userData.activityType}
          </div>
        </div>

        <div>
          <div>
            My daily calories: {props.userData.dailyCalories}
          </div>
          <div>
            My daily water: {props.userData.dailyWater}
          </div>
          <div>
            My Body Mass Index: {props.userData.bodyMassIndex}
          </div>
        </div>

        <div>
          Мои рецепты: {props.userData.savedRecipes.map(recipe => {
            return <div>{recipe.title}</div>
          })}
        </div>
        </div>
      )
    }
    </div>
  )
}

export default Profile