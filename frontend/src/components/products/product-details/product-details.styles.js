import styled from 'styled-components'

import { redButton, H3, Image, Span, Button } from '../../../shared/elements'

const ProductDetails = styled.div`
  max-width: var(--max-width);
  padding: 0 4rem;
  width: 100%;
`

ProductDetails.Title = styled(H3)``

ProductDetails.Image = styled.div`
  display: flex;
  width: 55rem;
`

export const Content = styled.div`
  display: flex;
`

Content.ImageContainer = styled.div`
  display: flex;
  width: 55rem;
`

Content.Image = styled(Image)`
  object-fit: contain;
  width: 100%;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  height: 25rem;
  justify-content: space-between;
  margin-left: 5rem;
`

Details.Text = styled(Span)``

Details.AddToCartBtn = styled(Button)`
  ${redButton};
`

export default ProductDetails
