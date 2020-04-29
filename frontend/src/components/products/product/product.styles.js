import styled, { css } from 'styled-components'

import { device, buildStyledComponent } from '../../../utils'

const baseStyles = css`
  height: 500px;
  transition: all 0.5s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: white;
  border-radius: 3px;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 1);
  @media ${device.mobileL} {
    margin-bottom: 5rem;
  }
`

const Product = buildStyledComponent({ element: styled.li, baseStyles })

Product.Special = styled.div`
  position: absolute;
  padding: 0.5rem;
  right: 0;
  transform: rotate(10deg) translate(1rem, -1rem);
  z-index: 1;
  border-radius: 2px;
  background: red;
  font-size: var(--small-font);
`

Product.Image = styled.div`
  position: relative;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

Product.Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 6rem;
  text-align: center;
  width: 100%;
  span {
    font-size: 2rem;
    padding: 0.5rem 2rem;
    background: var(--red);
    color: var(--off-white);
    transform: skew(-10deg);
    width: 80%;
    border-radius: 3px;
    align-self: center;
  }
  hr {
    width: 3rem;
    background: red;
  }
`

export const Price = styled.div`
  font-size: 2rem;
  width: 100%;
  color: black;
`

Product.Button = styled.div`
  width: 100%;
  button {
    outline-color: var(--red);
    padding: 1.5rem 2rem;
    width: 100%;
    background: var(--red);
    color: var(--off-white);
    font-size: var(--regular-font);
    &:hover {
      border-color: #f3443c;
      background: #f3443c;
    }
  }
`

export default Product
