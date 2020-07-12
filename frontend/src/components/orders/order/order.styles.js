import styled from 'styled-components'

import headerBackground from '../../../images/logo-royal-banner.svg'
import { device } from '../../../utils'

const Order = styled.li`
  width: 100%;
  height: 32rem;
  margin-bottom: 4.7rem;
  box-shadow: var(--box-shadow);
  cursor: pointer;
`

Order.Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${headerBackground}) center 75%;
  background-repeat: no-repeat;
  position: relative;
  height: 15rem;
  @media ${device.mobileL} {
    background-position-y: 65%;
  }
  img {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    position: relative;
    bottom: -5rem;
    border: 0.8rem solid var(--dark);
  }
`

Order.Body = styled.div`
  text-align: center;
  padding-top: 3rem;
`

export default Order
