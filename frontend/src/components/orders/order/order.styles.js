import styled from 'styled-components'

import headerBackground from '../../../images/logo-royal-banner.svg'
import { Image, P } from '../../../elements'

const Order = styled.li`
  background: url(${headerBackground}) center center;
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  margin-bottom: 4.7rem;
  width: 100%;
`

export const Header = styled.div`
  align-items: center;
  display: flex;
  height: 10rem;
  justify-content: center;
  position: relative;

  &::before {
    background: var(--red);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 50%;
  }
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
