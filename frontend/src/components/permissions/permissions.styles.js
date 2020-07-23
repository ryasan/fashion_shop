import styled, { css } from 'styled-components'

import { Th } from '../../elements'

const Permissions = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const Table = styled.table`
  max-width: var(--max-width);
  margin-top: 2rem;
  background: var(--darker);
`

Table.Head = styled.thead`
  width: 100%;
`

Table.Row = styled.tr`
  width: 100%;
  display: flex;
  justify-content: center;
`

Table.Body = styled.tbody`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

const baseStyles = css`
  width: 16rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid white;
  &:nth-child(n + 3):not(:last-child) {
    border-left: 0;
    border-right: 0;
  }
  &:nth-child(n + 3):not(:last-child) {
    width: 12rem;
  }
`

const HeaderCell = styled(Th)`
  ${baseStyles};
  color: ${props => (props.active ? 'var(--red)' : 'var(--salmon)')};
  border: 0.1rem solid white;
`

const _Cell = styled.td`
  ${baseStyles};
  &:last-child {
    border-left: 0;
  }
  button {
    width: 100%;
    background: var(--salmon);
    &:hover {
      background: var(--red);
      color: white;
    }
  }
`

export { Table, _Cell, HeaderCell }
export default Permissions
