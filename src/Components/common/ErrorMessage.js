import React from 'react'
import { connect } from 'react-redux'

const ErrorMessage = (props) => {
  const errorStyles = {
    color: 'red',
    fontSize: '50px',
    position: 'absolute',
    bottom: '0px',
  }

  return (
    <div style={errorStyles}>
      {props.errorMessage}
    </div>
  )
}

const mapStateToProps = (state) => ({
  errorMessage: state.forError.errorMessage
})

export default connect(mapStateToProps, {})(ErrorMessage)