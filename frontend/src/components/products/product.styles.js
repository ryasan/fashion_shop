import styled from 'styled-components'

import { Button, Img, Span } from '../elements'

const Product = styled.div`
  outline: 1px solid red;
  height: 40rem;
  transition: all 0.5s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

Product.Img = styled(Img)`
  width: 100%;
`

Product.Deal = styled(Span)`
  position: absolute;
  padding: 0.5rem;
  right: 0;
`

Product.Thumb = styled.div``

Product.Title = styled.div``

Product.Price = styled.div``

Product.BuyBtn = styled(Button)`
  width: 100%;
`

export default Product
