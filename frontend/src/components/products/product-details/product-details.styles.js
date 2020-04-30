import styled from 'styled-components'

import { Row, Column } from '../../../blocks'

const ProductDetails = styled.div`
  width: 100%;
  max-width: var(--max-width);
  .column:last-child {
    margin-left: 5rem;
    height: 25rem;
    justify-content: space-between;
  }
`

ProductDetails.Row = Row
ProductDetails.Column = Column

export default ProductDetails
