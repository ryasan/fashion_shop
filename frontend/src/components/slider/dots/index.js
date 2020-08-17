import React from 'react'
import PropTypes from 'prop-types'

import DotList, { Dot } from './dots.styles'

const DotsComponent = ({ currentIdx, numberOfDots, onClick }) => {
  return (
    <DotList>
      {Array.from({ length: numberOfDots }).map((_, i) => (
        <Dot key={i} isActive={i === currentIdx} onClick={() => onClick(i)} />
      ))}
    </DotList>
  )
}

DotsComponent.propTypes = {
  currentIdx: PropTypes.number.isRequired,
  numberOfDots: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default DotsComponent
