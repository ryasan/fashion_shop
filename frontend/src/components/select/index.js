import React from 'react'
import PropTypes from 'prop-types'

import Select from './select.styles'
import { Label, Option, Select as Dropdown } from '../../elements'

const SelectComponent = ({ onChange, options, label, selected }) => {
  const handleOnChange = e => onChange(e.target.value)

  return (
    <Select>
      <Label modifiers='font_size_m'>{label}:</Label>
      <Dropdown
        modifiers='font_size_s'
        defaultValue={selected}
        onChange={handleOnChange}
      >
        {options.map((opt, i) => (
          <Option key={i} value={opt.value}>
            {opt.name}
          </Option>
        ))}
      </Dropdown>
    </Select>
  )
}

SelectComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired
}

export default SelectComponent
