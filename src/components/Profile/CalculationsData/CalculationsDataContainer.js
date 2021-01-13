import React from 'react'
import { connect } from "react-redux"
import CalculationsData from './CalculationsData'

const CalculationsDataContainer = (props) => {
  return (
    <CalculationsData 
      userData={props.userData} 
    />
  )
}

const mapStateToProps = (state) => ({
  userData: state.userPersonalData,
})

export default connect(mapStateToProps, {})(CalculationsDataContainer)