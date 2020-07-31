import React from 'react'
import PropTypes from 'prop-types'

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

const CategorySelectComponent = ({ onChange, selected }) => {
  return (
    <Select
      selected={selected}
      options={categoryOptions}
      onChange={onChange}
      label='Choose category'
    />
  )
}

CategorySelectComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
}

export default CategorySelectComponent
