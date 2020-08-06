import styled from 'styled-components'

import { Table as TableEl, Tr, Th, Td, Tbody, Thead } from '../../shared/elements'

const TableWrap = styled.div`
  flex: 1;
  width: 100%;
`

const Table = styled(TableEl)`
  width: 100%;

  th,
  td {
    border: 0.1rem solid white;
    border-bottom: 0;
    border-left: 0;
    flex: 1;
    font-size: var(--font-size-s);
    height: 4rem;
    line-height: 4rem;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;

    > * {
      left: 50%;
      position: absolute;
      top: 50%;
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
  border-top: 0.1rem solid white;
  color: ${props => (props.isActive ? 'var(--red)' : 'var(--salmon)')};
`

const Cell = styled(Td)`
  text-align: center;
`

export { Table, HeaderCell, Cell }
export default TableWrap
