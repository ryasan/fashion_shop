import styled, { css } from 'styled-components'

const CartItem = styled.li`
  width: 100%;
  height: 12rem;
  border-top: 2px solid #101010;
  position: relative;
  ${props =>
    props.isMouseOver &&
    css`
      background: var(--darker);
      span {
        text-decoration: line-through;
      }
    `}
`

CartItem.Content = styled.div`
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  img {
    height: 100%;
  }
`

CartItem.Details = styled.div`
  flex: 1;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

CartItem.Price = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    fill: white;
    &:hover {
      fill: var(--red);
    }
  }

  div {
    display: flex;
    button {
      border-radius: 0;
      height: 2.5rem;
      width: 2rem;
      background: var(--darker);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 2px;
      &:disabled {
        background: var(--dark);
      }
      &:focus {
        outline-color: transparent;
      }
    }
  }
`

export default CartItem
