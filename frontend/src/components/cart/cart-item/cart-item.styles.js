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

const Content = styled.div`
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  img {
    height: 100%;
  }
`

Content.Details = styled.div`
  flex: 1;
  margin: 0 2rem;
  span {
    margin-bottom: 1rem;
    display: inline-block;
    span {
      margin-top: 1rem;
    }
  }
`

CartItem.Price = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: -0.3rem;
    right: 0;
    cursor: pointer;
    fill: black;
    &:hover {
      fill: var(--off-white);
    }
  }
`

export { Content }
export default CartItem
