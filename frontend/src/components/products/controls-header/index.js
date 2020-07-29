import React from 'react'

import ControlsHeader from './controls-header.styles'
import Filter from '../filter'
import { Span } from '../../../elements'
import Select from '../../select'

const Count = ({ count }) => (
  <Span modifiers={['white_color', 'font_size_m']}>
    {`Found ${count} product${count > 1 ? 's' : ''}`}
  </Span>
)

const options = [
  { name: 'Choose...', value: 'id_ASC' },
  { name: 'Lowest to highest', value: 'price_ASC' },
  { name: 'Highest to lowest', value: 'price_DESC' },
  { name: 'Title ascending', value: 'title_ASC' },
  { name: 'Title to descending', value: 'title_DESC' }
]

const ControlsHeaderComponent = ({ count, setOrderBy }) => (
  <ControlsHeader>
    <Filter />
    {typeof count === 'number' && <Count count={count} />}
    <Select onChange={setOrderBy} options={options} label='Order by' />
  </ControlsHeader>
)

export default ControlsHeaderComponent
