import styled from 'styled-components'

import Icon from '../icons'
import { Button, Span, H4, P } from '../elements'
import { device } from '../../utils'

const Cart = styled.div`
  position: fixed;
  z-index: 20;
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
    width: 2px;
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
  left: -7rem;
  outline: 0;
  background: var(--dark);
  fill: var(--off-white);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: fill 0.2s;
  &:before {
    content: '';
    position: absolute;
    width: 2px;
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
    fill: var(--red);
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

Cart.BagContainer = styled.div`
  position: relative;
`

Cart.Bag = styled(Icon)`
  width: 4rem;
  height: 4rem;
  display: inline-block;
  margin-left: 1.5rem;
  fill: var(--off-white);
`

Cart.BagQty = styled(Span)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--off-white);
  position: absolute;
`

Cart.ClosedBagQty = styled(Cart.BagQty)`
  bottom: 1rem;
  right: 1.2rem;
`

Cart.OpenBagQty = styled(Cart.BagQty)`
  right: -0.5rem;
  bottom: -0.5rem;
`

Cart.Title = H4

Cart.List = styled.ul`
  flex: 1;
`

Cart.Text = P

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
