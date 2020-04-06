import styled from 'styled-components'

const Cart = styled.div`
  position: fixed;
  z-index: 2;
  height: 100%;
  width: 45rem;
  right: ${props => (props.cartOpen ? '0' : '-45rem')};
  transition: right 0.2s;
  background: var(--dark);
  &:before {
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
`

export default Cart
