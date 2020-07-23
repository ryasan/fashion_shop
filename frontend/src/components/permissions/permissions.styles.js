import styled from 'styled-components'

import { device } from '../../utils'

const Users = styled.div`
  flex: 1;
`

const Table = styled.table`
  width: 100%;
  max-width: var(--max-width);
  margin-top: 2rem;
`

Table.Head = styled.thead`
  width: 100%;
`

Table.Row = styled.tr`
  display: flex;
  width: 100%;
  th,
  td {
    width: 15.5rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.1rem solid white;
    @media ${device.laptop} {
      width: 11.5rem;
    }
  }
  th {
    border: 0.1rem solid white;
    color: var(--salmon);
  }
  td:last-child {
    
    padding: 0.5rem;
  }
  button {
    width: 100%;
    background: var(--salmon);
    &:hover {
      background: var(--red);
    }
  }
`

Table.Body = styled.tbody``

export { Table }
export default Users
