import styled from 'styled-components'

import headerBackground from '../../../images/logo-royal-banner.svg'
import { device } from '../../../utils'

const Order = styled.li`
  box-shadow: var(--box-shadow);
  height: 32rem;
  margin-bottom: 4.7rem;
  width: 100%;
  cursor: pointer;
`

Order.Header = styled.div`
  align-items: center;
  background: url(${headerBackground}) center 75%;
  background-repeat: no-repeat;
  display: flex;
  height: 15rem;
  justify-content: center;
  position: relative;
  @media ${device.mobileL} {
    background-position-y: 65%;
  }

  img {
    border: 0.8rem solid var(--dark);
    border-radius: 50%;
    bottom: -5rem;
    height: 10rem;
    object-fit: cover;
    position: relative;
    width: 10rem;
  }
`

Order.Body = styled.div`
  padding-top: 3rem;
  text-align: center;
`

export default Order
