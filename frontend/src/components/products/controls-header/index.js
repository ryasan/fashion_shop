import React from 'react'

import ControlsHeader from './controls-header.styles'
import Filter from '../filter'
import OrderBy from '../orderBy'

const Count = ({ count }) => (
  <ControlsHeader.Count modifiers="offWhiteColor">
    {`Found ${count} product${count >= 0 ? 's' : ''}`}
  </ControlsHeader.Count>
)

const ControlsHeaderComponent = ({ count, setOrderBy }) => (
  <ControlsHeader>
    <Filter />
    {typeof count === 'number' && <Count count={count} />}
    <OrderBy setOrderBy={setOrderBy} />
  </ControlsHeader>
)

export default ControlsHeaderComponent
