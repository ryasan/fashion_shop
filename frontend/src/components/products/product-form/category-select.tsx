import React from 'react'

import Select from '../../select'

import {
  ACCESSORY,
  BEANIE,
  HOODIE,
  LONG_SLEEVE,
  SHIRT,
  SHORTS
} from '../../../types/category-types'

const categoryOptions = [
  { value: ACCESSORY, name: 'Accessory' },
  { value: BEANIE, name: 'Beanie' },
  { value: HOODIE, name: 'Hoodie' },
  { value: LONG_SLEEVE, name: 'Long Sleeve' },
  { value: SHIRT, name: 'Shirt' },
  { value: SHORTS, name: 'Shorts' }
]

const CategorySelectComponent: React.StatelessComponent<{
  onChange: (category: string) => void
  selected: string
}> = ({ onChange, selected }) => (
  <Select
    selected={selected}
    options={categoryOptions}
    onChange={onChange}
    label='Choose category'
  />
)

export default CategorySelectComponent
