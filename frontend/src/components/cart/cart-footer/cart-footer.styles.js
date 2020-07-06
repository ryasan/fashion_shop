import styled from 'styled-components'

const CartFooter = styled.footer`
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
`

CartFooter.SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
`

export default CartFooter
