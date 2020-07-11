import styled from 'styled-components'

import { device } from '../../../utils'

const Orders = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
`

Orders.List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 5rem;
  justify-items: center;
  align-items: center;
  flex: 1;
  @media ${device.mobileL} {
    justify-content: center;
  }
`

export default Orders
