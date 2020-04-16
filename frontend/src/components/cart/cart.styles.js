import styled from 'styled-components'

import Icon from '../icons'
import { Button, Span, Ul, H4, P } from '../elements'
import { device } from '../../utils'

const Cart = styled.div`
  position: fixed;
  z-index: 2;
  height: 100%;
  width: 45rem;
  right: ${props => (props.cartOpen ? '0' : '-45rem')};
  transition: right 0.2s;
  background: var(--dark);
  &:after {
    content: '';
    position: absolute;
    background: var(--red);
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: ${props => (props.cartOpen ? '100%' : '0')};
    transition: height 0.5s;
    transition-delay: 0.2s;
  }
  @media ${device.mobileL} {
    width: 35rem;
    right: ${props => (props.cartOpen ? '0' : '-35rem')};
  }
`

Cart.Btn = styled(Button)`
  position: absolute;
  width: 7rem;
  height: 7rem;
  background: white;
  left: -7rem;
  outline: 0;
  background: var(--dark);
  color: var(--off-white);
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 100%;
  }
  &:before {
    content: '';
    position: absolute;
    width: 3px;
    background: var(--red);
    bottom: 0;
    left: 0;
    transition: height 0.2s ease-out;
    transition-delay: ${props => (props.cartOpen ? '0.8s' : '0')};
    height: ${props => (props.cartOpen ? '100%' : '0')};
  }
  &:after {
    content: '';
    position: absolute;
    height: 3px;
    background: var(--red);
    bottom: 0;
    right: 0;
    transition: width 0.2s ease-out;
    transition-delay: ${props => (props.cartOpen ? '0.6s' : '0')};
    width: ${props => (props.cartOpen ? '100%' : '0')};
  }
  &:hover {
    color: var(--red);
  }
`

Cart.Icon = Icon

Cart.Content = styled.div`
  color: var(--off-white);
  height: 70%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

Cart.Header = styled.div`
  text-align: center;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

Cart.Bag = styled(Icon)`
  width: 4rem;
  height: 4rem;
  position: relative;
  display: inline-block;
  margin-left: 1.5rem;
`

Cart.BagQty = styled(Span)``

Cart.Title = styled(H4)``

Cart.List = styled(Ul)`
  padding: 0.2rem 2rem;
  flex: 1;
`

Cart.P = P

Cart.Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
  background: var(--dark);
  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.6);
  padding: 4rem 3rem;
  display: grid;
  grid-gap: 3rem;
  grid-template-areas:
    'sub sub-price'
    'btn btn';
`

Cart.SubText = styled.div``

Cart.Sub = styled.div`
  grid-area: sub;
  font-size: var(--regular-font);
  display: flex;
  align-items: center;
`

Cart.SubPrice = styled.div`
  grid-area: sub-price;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

Cart.CheckoutBtn = styled(Button)`
  grid-area: btn;
  height: 5rem;
`

export default Cart
