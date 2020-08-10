import React from 'react'
import PropTypes from 'prop-types'

import DotList, { Dot } from './dots.styles'

const DotsComponent = ({ centerPos, numberOfDots, onClick }) => {
  return (
    <DotList>
      {Array.from({ length: numberOfDots }).map((_, i) => (
        <Dot key={i} isActive={i === centerPos} onClick={() => onClick(i)} />
      ))}
    </DotList>
  )
}

DotsComponent.propTypes = {
  centerPos: PropTypes.number.isRequired,
  numberOfDots: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default DotsComponent
