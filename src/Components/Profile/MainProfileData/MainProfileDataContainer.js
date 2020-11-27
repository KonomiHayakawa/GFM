import React from 'react'
import { connect } from 'react-redux'
import MainProfileData from './MainProfileData'

const MainProfileDataContainer = (props) => {

  return (
    <MainProfileData 
      {...props} 
    />
  )
}

const mapStateToProps = (state) => ({
  error: state.forError.error
})

export default connect(mapStateToProps, {})(MainProfileDataContainer)