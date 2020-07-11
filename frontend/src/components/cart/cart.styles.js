import styled from 'styled-components'

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

Cart.Bag = styled.div`
  min-width: 3rem;
  min-height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  background: var(--red);
  font-size: 1.5rem;
  padding: 0.5rem;
  right: -3rem;
  top: 50%;
  transform: translateY(-50%);
`

Cart.Button = styled.div`
  position: absolute;
  width: 7rem;
  height: 7rem;
  left: -7rem;
  outline: 0;
  background: var(--dark);
  fill: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: fill 0.2s;
  cursor: pointer;
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
  justify-content: center;
  align-items: center;
`

Cart.BagContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 4rem;
    height: 4rem;
    display: inline-block;
    fill: white;
  }
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
