import React from 'react'

import Sort from './sort.styles'

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
    <Sort>
      <Sort.Label modifiers="mediumText">Order by:</Sort.Label>
      <Sort.Select modifiers="smallText" onChange={handleOnChange}>
        {options.map((opt, i) => (
          <Sort.Option key={i} value={opt.value}>
            {opt.name}
          </Sort.Option>
        ))}
      </Sort.Select>
    </Sort>
  )
}

export default SortComponent
