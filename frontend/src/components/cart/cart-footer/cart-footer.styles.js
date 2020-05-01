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
  button {
    background: var(--darker);
    color: var(--off-white);
    font-size: var(--font_size_lg);
    padding: 1.5rem 0;
    width: 100%;
    outline-color: var(--red);
  }
`

CartFooter.SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
`

export default CartFooter
