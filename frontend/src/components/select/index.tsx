import React from 'react'

import Select from './select.styles'
import { SizeEnum } from '../../shared/typings/enums'

interface OptionInterface {
  name: SizeEnum | string
  value: SizeEnum | string | number
}

interface SelectInterface {
  onChange: (e: any) => any
  options: OptionInterface[]
  label: string
  selected: string | undefined
}

const SelectComponent = ({
  onChange,
  options,
  label,
  selected
}: SelectInterface) => {
  const handleOnChange = (e: any) => onChange(e.target.value)

  return (
    <Select>
      <Select.Label modifiers='font_size_lg'>{label}:</Select.Label>
      <Select.Dropdown
        modifiers='font_size_m'
        defaultValue={selected}
        onChange={handleOnChange}
      >
        {options.map((opt: OptionInterface, i: number) => (
          <Select.Option key={i} value={opt.value}>
            {opt.name}
          </Select.Option>
        ))}
      </Select.Dropdown>
    </Select>
  )
}

export default SelectComponent
