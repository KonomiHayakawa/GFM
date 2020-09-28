import React from 'react'
import {connect} from 'react-redux'
import Menu from './Menu'

const MenuContainer = (props) => {
  return <Menu {...props}/>
}

const mapStateToProps = (state) => {
  return {
    data: state.menuReducer,
  }
}

export default connect(mapStateToProps, {})(MenuContainer)