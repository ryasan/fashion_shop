import React from 'react'
import PropTypes from 'prop-types'

import ScrollProgress from './scroll-progress.styles'

const ScrollProgressComponent: React.FC<{ scrollPct: number }> = ({
  scrollPct
}) => {
  return <ScrollProgress>{scrollPct}%</ScrollProgress>
}

ScrollProgressComponent.propTypes = {
  scrollPct: PropTypes.number.isRequired
}

export default ScrollProgressComponent
