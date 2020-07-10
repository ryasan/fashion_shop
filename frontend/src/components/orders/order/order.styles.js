import styled from 'styled-components'

import headerBackground from '../../../images/logo-royal-banner.svg'

const Order = styled.li`
  width: 26rem;
  height: 32rem;
  margin-bottom: 4.7rem;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.6);
  cursor: pointer;
`

Order.Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${headerBackground}) center 75%;
  position: relative;
  height: 15rem;
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
