import React, { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom'
import {getFoodGroupsData} from '../../queries/queries'

const FoodCalories = () => {

  const [groups, setGroups] = useState([])

  useEffect(() => {  getFoodGroupsData()
    .then((groups) => groups.map((group) => <div><NavLink to={group.linkTo}>{group.name}</NavLink></div>))
    .then(result => setGroups(result))
  }, [])
  
  return (
    <div>
      <NavLink to='/menu'>BACK TO MENU</NavLink>
      <div>{groups}</div>
    </div>
  )
}

export default FoodCalories
