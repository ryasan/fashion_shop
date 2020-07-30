import styled from 'styled-components'

import { Table as TableEl, Tr, Th, Td, Tbody, Thead } from '../../elements'

const TableWrap = styled.div`
  width: 100%;
  flex: 1;
`

const Table = styled(TableEl)`
  width: 100%;
  th,
  td {
    flex: 1;
    width: 100%;
    border: 0.1rem solid white;
    border-left: 0;
    border-bottom: 0;
    height: 4rem;
    line-height: 4rem;
    font-size: var(--font-size-s);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:first-child {
      border-left: 0.1rem solid white;
    }
  }
  td {
    border-top: 0;
  }
  tr:last-child {
    td,
    th {
      border-bottom: 0.1rem solid white;
    }
  }
`

Table.Head = styled(Thead)`
  text-align: center;
`

Table.Body = styled(Tbody)``

const TableRow = styled(Tr)`
  display: flex;
`

const HeaderCell = styled(Th)`
  color: var(--salmon);
  border-top: 0.1rem solid white;
`

const Cell = styled(Td)`
  text-align: center;
`

export { TableRow, Table, HeaderCell, Cell }
export default TableWrap
