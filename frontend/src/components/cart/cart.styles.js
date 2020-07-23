import styled from 'styled-components'

import { device } from '../../utils'

const Cart = styled.div`
  position: fixed;
  z-index: 20;
  height: 100%;
  width: 45rem;
  right: ${props => (props.cartOpen ? '0' : '-45rem')};
  bottom: 0;
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

Cart.ToggleButton = styled.div`
  position: absolute;
  width: 9rem;
  height: 7rem;
  left: -9rem;
  outline: 0;
  background: var(--dark);
  fill: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: fill 0.2s;
  cursor: pointer;
  font-size: var(--font-size-s);
  svg {
    width: 3rem;
    height: 3rem;
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

Cart.Content = styled.div`
  color: white;
  height: 70%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

Cart.Header = styled.div`
  text-align: center;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    margin: 0;
  }
`

Cart.BagContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 7rem;
`

Cart.List = styled.ul`
  flex: 1;
`

Cart.EmptyDisplay = styled.div`
  text-align: center;
  display: block;
  font-size: var(--font-size-m);
  width: 100%;
`

export default Cart
