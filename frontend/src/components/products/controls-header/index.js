import React from 'react'

import ControlsHeader from './controls-header.styles'
import Filter from '../filter/index'
import Sort from '../sort/index'

const ControlsHeaderComponent = ({ count }) => {
  return (
    <ControlsHeader>
      <Filter />
      {typeof count === 'number' && (
        <ControlsHeader.Count modifiers="offWhiteColor">
          {`Found ${count} product${count >= 0 ? 's' : ''}`}
        </ControlsHeader.Count>
      )}
      <Sort />
    </ControlsHeader>
  )
}

export default ControlsHeaderComponent
