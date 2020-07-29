import React from 'react'

import OrderBy from './order-by.styles'
import { Label, Select, Option } from '../../elements'

const OrderByComponent = ({ setOrderBy, options }) => {
  const handleOnChange = e => setOrderBy(e.target.value)

  return (
    <OrderBy>
      <Label modifiers='font_size_m'>Order by:</Label>
      <Select modifiers='font_size_s' onChange={handleOnChange}>
        {options.map((opt, i) => (
          <Option key={i} value={opt.value}>
            {opt.name}
          </Option>
        ))}
      </Select>
    </OrderBy>
  )
}

export default OrderByComponent
