import React from 'react'

import ControlsHeader from './controls-header.styles'
import Filter from '../filter/index'
import Sort from '../sort/index'

const ControlsHeaderComponent = ({ count }) => {
  return (
    <ControlsHeader>
      <Filter />
      <ControlsHeader.Count modifiers="offWhiteColor">
        {count !== null && `Found ${count} product${count !== 1 ? 's' : ''}`}
      </ControlsHeader.Count>
      <Sort />
    </ControlsHeader>
  )
}

export default ControlsHeaderComponent
