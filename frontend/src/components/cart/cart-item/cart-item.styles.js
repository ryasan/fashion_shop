import styled, { css } from 'styled-components'

import { Image, P, Span } from '../../elements'
import Icon from '../../icons'

const CartItem = styled.li`
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

CartItem.Thumb = styled(Image)`
  height: 100%;
`

CartItem.Text = P

CartItem.Details = styled.div`
  flex: 1;
  margin: 0 2rem;
  p {
    margin-bottom: 1rem;
  }
`

CartItem.Qty = Span

CartItem.Price = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

CartItem.Delete = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: -0.3rem;
  right: 0;
  cursor: pointer;
  fill: black;
  &:hover {
    fill: var(--off-white);
  }
`


export default CartItem
