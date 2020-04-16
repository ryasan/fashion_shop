import styled from 'styled-components'

import { Button, Img, Span, Small, Hr, B } from '../elements'
import { device } from '../../utils'

const Product = styled.div`
  transition: all 0.5s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: white;
  box-shadow: 0px 25px 18px -18px rgba(0, 0, 0, 1);
  @media ${device.mobileL} {
    margin-bottom: 5rem;
  }
`

Product.Img = styled(Img)`
  width: 100%;
`

Product.Special = styled(Span)`
  position: absolute;
  padding: 0.5rem;
  right: 0;
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

Product.B = styled(B)``

Product.Small = styled(Small)``

Product.BuyBtn = styled(Button)`
  border-width: 2px;
  border-style: solid;
  outline-color: var(--red);
  &:hover {
    color: var(--red);
    background: var(--dark);
  }
`

export default Product
