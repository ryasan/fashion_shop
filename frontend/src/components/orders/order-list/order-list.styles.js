import styled from 'styled-components'

const Orders = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-grow: 1;
`

Orders.Inner = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

Orders.List = styled.ul`
  margin-top: 5rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 25.7rem);
  grid-gap: 3rem;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export default Orders
