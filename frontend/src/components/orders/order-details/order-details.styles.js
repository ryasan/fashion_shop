import styled from 'styled-components'

import { P, Span, Image, Ul } from '../../../elements'

const OrderDetails = styled.div`
  padding-top: 2rem;
`

export const TextKey = styled(Span)`
  color: var(--red);
`

export const Text = styled(P)`
  display: flex;
  justify-content: space-between;
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
  box-shadow: var(--box-shadow);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  padding: 1rem;
`

OrderItem.ImageContainer = styled.div`
  flex: 1;
`

OrderItem.Image = styled(Image)`
  border: 0.5rem solid var(--dark);
  height: 9rem;
  object-fit: cover;
  width: 7rem;
`

OrderItem.Cost = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 1rem;
  width: 22%;
`

OrderItem.Info = styled.div`
  flex: 2;
  padding-right: 1rem;
  width: 60%;
`

export default OrderDetails
