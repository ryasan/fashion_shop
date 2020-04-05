import styled from 'styled-components'

const Cart = styled.div`
  position: fixed;
  height: 100%;
  width: 45rem;
  right: ${props => (props.cartOpen ? '0' : '-45rem')};
  transition: right 0.2s;
  background: var(--dark);
`

export default Cart
