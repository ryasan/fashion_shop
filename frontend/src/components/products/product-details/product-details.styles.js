import styled from 'styled-components'

import { redButton } from '../../../elements'

const ProductDetails = styled.div`
  width: 100%;
  max-width: var(--max-width);
`

ProductDetails.Image = styled.div`
  display: flex;
  width: 55rem;
  img {
    object-fit: contain;
    width: 100%;
  }
`

ProductDetails.Content = styled.div`
  display: flex;
`

ProductDetails.Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 5rem;
  height: 25rem;
  button {
    ${redButton};
  }
`

export default ProductDetails
