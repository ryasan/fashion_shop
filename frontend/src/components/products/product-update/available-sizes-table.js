import React from 'react'

import Table from '../../table'
import { TableRow, HeaderCell, Cell } from '../../table/table.styles'
import { Input as Checkbox } from '../../../elements'
import {
  SMALL,
  MEDIUM,
  LARGE,
  X_LARGE,
  XXL_LARGE
} from '../../../types/size-types'

const AvailableSizesTableHead = () => {
  const sizes = [SMALL, MEDIUM, LARGE, X_LARGE, XXL_LARGE]
  return (
    <TableRow>
      {sizes.map((size, i) => (
        <HeaderCell key={i}>{size}</HeaderCell>
      ))}
    </TableRow>
  )
}

const Checkboxes = Array.from({ length: 5 }, () => ({
  content: <Checkbox type='checkbox' />
}))

const AvailableSizesTableBody = () => {
  return (
    <TableRow>
      {Checkboxes.map((checkbox, i) => (
        <Cell key={i}>
          {checkbox.content}
        </Cell>
      ))}
    </TableRow>
  )
}

const AvailableSizesTable = () => {
  return (
    <Table
      head={<AvailableSizesTableHead />}
      body={<AvailableSizesTableBody />}
    />
  )
}

export default AvailableSizesTable
