import React from 'react'

import ControlsHeader from './controls-header.styles'
import Filter from '../filter'
import OrderBy from '../orderBy'
import { Span } from '../../../elements'

const Count = ({ count }) => (
  <Span modifiers={['off_white_color', 'font_size_m']}>
    {`Found ${count} product${count > 1 ? 's' : ''}`}
  </Span>
)

const ControlsHeaderComponent = ({ count, setOrderBy }) => (
  <ControlsHeader>
    <Filter />
    {typeof count === 'number' && <Count count={count} />}
    <OrderBy setOrderBy={setOrderBy} />
  </ControlsHeader>
)

export default ControlsHeaderComponent
