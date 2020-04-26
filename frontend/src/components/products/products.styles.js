import styled from 'styled-components'

import Loader from '../loader'
import ErrorBoundary from '../error-boundary'
import { P } from '../elements'

const Products = styled.div`
  max-width: var(--max-width);
  width: 100%;
  display: flex;
  flex-direction: column;
`

Products.Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

Products.Loader = Loader
Products.Text = P
Products.ErrorBoundary = ErrorBoundary

export default Products
