import styled from 'styled-components'

import { Button } from '../../../elements'

const TakeMyMoney = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;

  span {
    width: 100%;
  }
`

export const CheckoutBtn = styled(Button)`
  background: var(--darker);
  color: white;
  display: block;
  font-size: var(--font-size-lg);
  padding: 1.5rem 0;
  width: 100%;

  &:focus {
    outline-color: transparent;
  }
`

export default TakeMyMoney
