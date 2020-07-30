import React from 'react'
import PropTypes from 'prop-types'

import TableWrap, { Table } from './table.styles'

const TableComponent = ({ head, body }) => {
  return (
    <TableWrap>
      <Table cellPadding={0} cellSpacing={0}>
        <Table.Head>{head}</Table.Head>
        <Table.Body>{body}</Table.Body>
      </Table>
    </TableWrap>
  )
}

TableComponent.propTypes = {
  head: PropTypes.node,
  body: PropTypes.node
}

TableComponent.defaultProps = {
  head: [],
  body: {}
}

export default TableComponent
