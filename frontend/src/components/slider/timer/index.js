import React from 'react'
import PropTypes from 'prop-types'

import Timer from './timer.styles'

const SlideTimerComponent = ({ pct }) => (
  <Timer>
    <Timer.Bg />
    <Timer.Clock pct={pct} />
  </Timer>
)

SlideTimerComponent.propTypes = {
  pct: PropTypes.number.isRequired
}

export default SlideTimerComponent
