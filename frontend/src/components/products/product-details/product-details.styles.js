import styled from 'styled-components'

import { Row } from '../../../blocks'

const ProductDetails = styled.div`
  * {
    outline: 1px solid red;
  }
  width: 100%;
  max-width: var(--max-width);
`

ProductDetails.Row = Row

export default ProductDetails
