import styled from 'styled-components'

const Cart = styled.div`
  position: fixed;
  z-index: 2;
  height: 100%;
  width: 45rem;
  right: ${props => (props.cartOpen ? '0' : '-45rem')};
  transition: right 0.2s;
  background: var(--dark);
  border-left: 3px solid var(--darker);
`

export default Cart
