import React from 'react'

import OrderBy from './orderBy.styles'

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
      <OrderBy.Label modifiers="mediumText">Order by:</OrderBy.Label>
      <OrderBy.Select modifiers="smallText" onChange={handleOnChange}>
        {options.map((opt, i) => (
          <OrderBy.Option key={i} value={opt.value}>
            {opt.name}
          </OrderBy.Option>
        ))}
      </OrderBy.Select>
    </OrderBy>
  )
}

export default SortComponent
