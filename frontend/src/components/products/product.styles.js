import styled from 'styled-components'

import { Button, Img, Span, Small, Hr, B } from '../elements'

const Product = styled.div`
  transition: all 0.5s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  text-align: center;
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

Product.Title = styled.div`
  font-size: var(--regular-font);
  margin: 1rem 0;
`

Product.Divider = styled(Hr)`
  width: 2rem;
`

Product.Price = styled.div`
  font-size: 2em;
  margin: 1rem 0;
`

Product.B = styled(B)``

Product.Small = styled(Small)``

Product.BuyBtn = styled(Button)`
  width: 100%;
  padding: 1.5rem 0;
  &:hover {
    background: var(--red);
  }
`

export default Product
