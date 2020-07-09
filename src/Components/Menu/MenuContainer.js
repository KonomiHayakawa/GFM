import React from 'react'
import {connect} from 'react-redux'
import Menu from './Menu'

const mapStateToProps = (state) => {
  return {
    data: state.menuReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

class MenuContainer extends React.Component {
  render() {
    return <Menu {...this.props}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)