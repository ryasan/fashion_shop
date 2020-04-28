import styled from 'styled-components'

import { device } from '../../../utils'

const Product = styled.li`
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

Product.Special = styled.div`
  position: absolute;
  padding: 0.5rem;
  right: 0;
  transform: rotate(10deg) translate(1rem, -1rem);
  z-index: 1;
  border-radius: 2px;
`

Product.Thumb = styled.div`
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
  bottom: 5.5rem;
  text-align: center;
  color: black;
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
  }
`

const Price = styled.div`
  font-size: 2rem;
  width: 100%;
`

Product.Button = styled.div`
  button {
    border-width: 2px;
    border-style: solid;
    outline-color: var(--red);
    padding: 1.5rem 2rem;
    width: 100%;
    &:hover {
      color: var(--red);
      background: var(--dark);
    }
  }
`

export { Price }
export default Product
