import React from 'react'
import PropTypes from 'prop-types'

import TableWrap, { Table, HeaderCell, Cell } from './table.styles'

const HeadRow = ({ headRow }) => (
  <Table.Row>
    {headRow.map(({ text, Jsx, props }, i) => {
      if (text) return <HeaderCell key={i} title={text}>{text}</HeaderCell>
      if (Jsx) return <Jsx key={i} {...props} />
      return null
    })}
  </Table.Row>
)

const BodyRow = ({ bodyRow }) => (
  <Table.Row>
    {bodyRow.map(({ text, Jsx, props }, i) => {
      if (text) return <Cell key={i} title={text}>{text}</Cell>
      if (Jsx) return <Jsx key={i} {...props} />
      return null
    })}
  </Table.Row>
)

const TableComponent = ({ headRow, bodyRows }) => (
  <TableWrap>
    <Table cellPadding={0} cellSpacing={0}>
      <Table.Head>
        <HeadRow headRow={headRow} />
      </Table.Head>
      <Table.Body>
        {bodyRows.map((bodyRow, i) => (
          <BodyRow key={i} bodyRow={bodyRow} />
        ))}
      </Table.Body>
    </Table>
  </TableWrap>
)

TableComponent.propTypes = {
  headRow: PropTypes.arrayOf(PropTypes.object).isRequired,
  bodyRows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired
}

TableComponent.defaultProps = {
  headRow: [],
  bodyRows: []
}

export default TableComponent
