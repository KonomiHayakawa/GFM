import React from 'react'
import {getFoodGroup} from './../../../queries/queries'



const FoodCategory = (props) => {
  const getFoodGroup = (groupName) => {
    getFoodGroup(groupName).then((response) => console.log(response))
  }

  return (
    <div>
      <table>
        
      </table>
    </div>
  )
}

export default FoodCategory