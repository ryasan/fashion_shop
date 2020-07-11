import styled from 'styled-components'

const Orders = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
`

Orders.List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 25.7rem);
  grid-gap: 5rem;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export default Orders
