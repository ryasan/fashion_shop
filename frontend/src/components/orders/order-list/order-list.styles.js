import styled from 'styled-components'

const Orders = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

Orders.List = styled.ul`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 25.7rem);
  grid-gap: 3rem;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export default Orders
