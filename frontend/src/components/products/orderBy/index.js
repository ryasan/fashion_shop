import React from 'react'

import OrderBy from './orderBy.styles'
import { Label, Select, Option } from '../../elements'

const options = [
  { name: 'Select', value: 'id_ASC' },
  { name: 'Lowest to highest', value: 'price_ASC' },
  { name: 'Highest to lowest', value: 'price_DESC' },
  { name: 'Title ascending', value: 'title_ASC' },
  { name: 'Title to descending', value: 'title_DESC' }
]

const SortComponent = ({ setOrderBy }) => {
  const handleOnChange = e => setOrderBy(e.target.value)

  return (
    <OrderBy>
      <Label modifiers="font_size_m">Order by:</Label>
      <Select modifiers="font_size_s" onChange={handleOnChange}>
        {options.map((opt, i) => (
          <Option key={i} value={opt.value}>
            {opt.name}
          </Option>
        ))}
      </Select>
    </OrderBy>
  )
}

export default SortComponent
