import styled from 'styled-components'

import { Button, Image, Span, Small, Hr, B } from '../../elements'
import { device } from '../../../utils'

const Product = styled.li`
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

Product.Image = styled(Image)`
  width: 100%;
  height: 350px;
  object-fit: cover;
`

Product.Special = styled(Span)`
  position: absolute;
  padding: 0.5rem;
  right: 0;
  transform: rotate(10deg) translate(1rem, -1rem);
`

Product.Thumb = styled.div``

Product.Details = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 8rem;
  position: relative;
  text-align: center;
`

Product.Title = styled.div`
  font-size: 1.3rem;
`

Product.Divider = styled(Hr)`
  width: 3rem;
`

Product.Price = styled.div`
  font-size: 2rem;
  width: 100%;
`

Product.Dollars = B

Product.Cents = Small

Product.BuyBtn = styled(Button)`
  border-width: 2px;
  border-style: solid;
  outline-color: var(--red);
  padding: 1.5rem 2rem;
  &:hover {
    color: var(--red);
    background: var(--dark);
  }
`

export default Product
