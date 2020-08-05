import React from 'react'

import ScrollProgress from './scroll-progress.styles'

const ScrollProgressComponent = ({ pct }) => {
  return <ScrollProgress>{pct}%</ScrollProgress>
}
export default ScrollProgressComponent
