import React from 'react'
import PropTypes from 'prop-types'

import Table from '../../table'
import { Cell } from '../../table/table.styles'
import { Input, Label, Div } from '../../../shared/elements'
import possibleSizes, {
  SMALL,
  MEDIUM,
  LARGE,
  X_LARGE,
  XXL_LARGE
} from '../../../types/size-types'

const createSizesData = props => ({
  headRow: [
    { text: SMALL },
    { text: MEDIUM },
    { text: LARGE },
    { text: X_LARGE },
    { text: XXL_LARGE }
  ],
  bodyRows: [[{ Jsx: ProductSizes, props }]]
})

const ProductSizes = ({ availableSizes, onChange }) => {
  return possibleSizes.map((size, i) => (
    <Cell key={i}>
      <Input
        type='checkbox'
        value={size}
        onChange={onChange}
        checked={availableSizes.includes(size)}
      />
    </Cell>
  ))
}

ProductSizes.propTypes = {
  availableSizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
}

const AvailableSizesTableComponent = props => (
  <Div>
    <Label modifiers='font_size_lg'>Available sizes:</Label>
    <Table {...createSizesData(props)} />
  </Div>
)

export default AvailableSizesTableComponent
