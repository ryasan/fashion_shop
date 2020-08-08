import styled from 'styled-components'

import { P, Span, Image, Ul } from '../../../shared/elements'

const OrderDetails = styled.div`
  padding-top: 2rem;
`

export const TextKey = styled(Span)`
  color: var(--red);
  width: 9rem;
`

export const Text = styled(P)`
  display: flex;
  margin: 0.5rem 0;
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
`

export const OrderList = styled(Ul)`
  display: flex;
  flex-direction: column;
  width: 50rem;
`

export const OrderItem = styled.li`
  border: 0.2rem solid var(--red);
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  margin-top: 2.5rem;
  padding: 1rem;
`

OrderItem.ImageContainer = styled.div`
  grid-column: 1/2;
`

OrderItem.Image = styled(Image)`
  border: 0.5rem solid var(--dark);
  height: 9rem;
  object-fit: cover;
  width: 7rem;
`

OrderItem.Cost = styled.div`
  grid-column: 2/4;

  > p:not(:last-child) {
    margin-bottom: 1.3rem;
  }
`

OrderItem.Info = styled.div`
  grid-column: 4/6;

  > p:not(:last-child) {
    margin-bottom: 1.3rem;
  }
`

export default OrderDetails
