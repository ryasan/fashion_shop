import styled from 'styled-components'

import { Span } from '../../../shared/elements'

const CartFooter = styled.footer`
  background: var(--dark);
  bottom: 0;
  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  height: 30%;
  justify-content: space-around;
  padding: 4rem 3rem;
  position: absolute;
  width: 100%;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`

Footer.Text = Span

export default CartFooter
