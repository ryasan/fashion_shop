import React from 'react'
import PropTypes from 'prop-types'

import SelectContainer, { Select, Label } from './select.styles'

const SelectComponent = ({ onChange, options, label, selected }) => {
  const handleOnChange = e => onChange(e.target.value)

  return (
    <SelectContainer>
      <Label modifiers='font_size_lg'>{label}:</Label>
      <Select
        modifiers='font_size_m'
        defaultValue={selected}
        onChange={handleOnChange}
      >
        {options.map((opt, i) => (
          <Select.Option key={i} value={opt.value}>
            {opt.name}
          </Select.Option>
        ))}
      </Select>
    </SelectContainer>
  )
}

SelectComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired
}

export default SelectComponent
