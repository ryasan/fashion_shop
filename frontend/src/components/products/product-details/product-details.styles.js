import styled from 'styled-components'

import { redButton } from '../../../elements'

const ProductDetails = styled.div`
  max-width: var(--max-width);
  padding: 0 4rem;
  width: 100%;
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
  height: 25rem;
  justify-content: space-between;
  margin-left: 5rem;

  button {
    ${redButton};
  }
`

export default ProductDetails
