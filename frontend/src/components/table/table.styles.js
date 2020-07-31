import styled, { css } from 'styled-components'

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
    border: 0.1rem solid white;
    border-left: 0;
    border-bottom: 0;
    height: 4rem;
    line-height: 4rem;
    font-size: var(--font-size-s);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    & > * {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
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

Table.Row = styled(Tr)`
  display: flex;
`

const HeaderCell = styled(Th)`
  color: ${props => (props.isActive ? 'var(--red)' : 'var(--salmon)')};
  border-top: 0.1rem solid white;
`

const Cell = styled(Td)`
  text-align: center;
`

export { Table, HeaderCell, Cell }
export default TableWrap
