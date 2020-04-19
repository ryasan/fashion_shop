import styled from 'styled-components'

import { P, Span } from '../elements'

const ErrorBoundary = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: red;
  }
`

ErrorBoundary.Text = styled(P)`
  display: inline-block;
  border-left: 0.3rem solid red;
  padding: 1rem 2rem;
  background: white;
`

ErrorBoundary.Addon = Span

export default ErrorBoundary
