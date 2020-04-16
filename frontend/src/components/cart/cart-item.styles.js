import styled, { css } from 'styled-components'

import { Li, Img, P, Span } from '../elements'
import Icon from '../icons'

const CartItem = styled(Li)`
  width: 100%;
  height: 12rem;
  border-top: 2px solid #101010;
  position: relative;
  ${props =>
    props.isMouseOver &&
    css`
      background: var(--darker);
      p {
        text-decoration: line-through;
      }
    `}
`

CartItem.Content = styled.div`
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
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

CartItem.Delete = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: -0.3rem;
  right: 0;
  cursor: pointer;
  color: black;
  &:hover {
    color: var(--off-white);
  }
`

CartItem.Qty = Span

export default CartItem
