import React from 'react'
import { NavLink} from 'react-router-dom'



const SavedRecipe = (props) => {
console.log(props.kek)
  return (
    <div> 
      <NavLink to='/profile' >BACK</NavLink>
      <img src={props.kek.img}></img>
    </div>
  )
}

export default SavedRecipe