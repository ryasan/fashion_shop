import styled from 'styled-components'

import { Li, Img, P, Span } from '../elements'

const CartItem = styled(Li)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  height: 12rem;
  border-top: 2px solid #101010;
  position: relative;
`

CartItem.Thumb = styled(Img)`
  height: 100%;
`

CartItem.Details = styled.div`
  flex: 1;
  margin: 0 2rem;
  p {
    margin-bottom: 1rem;
  }
`

CartItem.Price = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

CartItem.P = P

CartItem.Delete = styled.div`
  color: black;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: -0.3rem;
  right: 0;
  cursor: pointer;
  background: url(${require('../../images/close.svg')}) center center;
  background-size: cover;
  &:hover {
    color: var(--red);
  }
`

CartItem.Qty = Span

export default CartItem
