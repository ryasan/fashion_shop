import styled from 'styled-components'

import Icon from '../icons'
import { Button } from '../elements/button'
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
    transform: translate(0.1rem, -50%);
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
  width: 10rem;
  height: 8rem;
  background: white;
  left: -10rem;
  outline: 0;
  background: var(--dark);
  color: var(--off-white);
  svg {
    padding: 1rem;
    height: 100%;
  }
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
    height: 2px;
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

export default Cart
