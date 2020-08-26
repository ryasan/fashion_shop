import styled from 'styled-components'

import orderBg from '../../../static/main-white.svg'
import { Image, P } from '../../../shared/elements'

const Order = styled.li`
  box-shadow: var(--box-shadow-m);
  cursor: pointer;
  margin-bottom: 4.7rem;
  width: 100%;
`

export const Header = styled.div`
  align-items: center;
  background: url(${orderBg}) center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 10rem;
  justify-content: center;
  position: relative;
`

Header.Image = styled(Image)`
  border: 0.8rem solid var(--dark);
  border-radius: 50%;
  bottom: -5rem;
  height: 10rem;
  object-fit: cover;
  position: relative;
  width: 10rem;
`

Order.Body = styled.div`
  padding: 3rem;
  text-align: center;
`

export const Text = P

export default Order
