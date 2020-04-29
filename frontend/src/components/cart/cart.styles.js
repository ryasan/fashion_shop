import styled from 'styled-components'

import { device } from '../../utils'
import { Span } from '../../elements'

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

const Bag = styled(Span)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--off-white);
  position: absolute;
  &.bag-closed {
    bottom: 1rem;
    right: 1.2rem;
  }
  &.bag-open {
    right: -0.5rem;
    bottom: -0.5rem;
  }
`

Cart.Button = styled.div`
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
  color: var(--off-white);
  height: 70%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

const Header = styled.div`
  text-align: center;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

Header.Bag = styled.div`
  position: relative;
  svg {
    width: 4rem;
    height: 4rem;
    display: inline-block;
    margin-left: 1.5rem;
    fill: var(--off-white);
  }
`

Cart.List = styled.ul`
  flex: 1;
`

Cart.Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
  background: var(--dark);
  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.6);
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  button {
    background: var(--darker);
    color: var(--off-white);
    font-size: var(--font_size_lg);
    padding: 1.5rem 0;
    width: 100%;
  }
`

const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
`

export { Bag, SubTotal, Header }
export default Cart
