import React from 'react'
import DailyWaterCalculator from './DailyWaterCalculator'
import { connect } from 'react-redux'


class DailyWaterCalculatorContainer extends React.Component {
  render() {
    return (
      <DailyWaterCalculator />
    )
  }
}

const mapStateToProps = () => {
 return (
   {}
 )
}

export default connect(mapStateToProps, {})(DailyWaterCalculatorContainer)