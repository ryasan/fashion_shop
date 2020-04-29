import styled from 'styled-components'

import { redButton } from '../../elements'
import { device } from '../../../utils'

const Product = styled.div`
  transition: all 0.5s ease-out;
  display: flex;
  flex-direction: column;
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
  background: red;
  font-size: var(--font-size-s);
`

Product.Image = styled.div`
  text-align: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

Product.Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 100%;
  span {
    font-size: 2rem;
    padding: 1rem 2rem;
    background: var(--red);
    color: var(--off-white);
    transform: skew(-10deg) translateY(-1.5rem);
    width: 80%;
    border-radius: 3px;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -2rem;
  }
  hr {
    width: 3rem;
    background: red;
    margin-top: 5rem;
  }
`

export const Price = styled.div`
  margin: 1rem 0;
  font-size: 2rem;
  width: 100%;
  color: black;
`

Product.Button = styled.div`
  width: 100%;
  button {
    ${redButton};
    padding: 1.5rem 0;
    width: 100%;
  }
`

export default Product
