import styled from 'styled-components'

import { Span, P } from '../../elements'

const ErrorBoundary = styled.div`
  display: flex;
  flex-direction: column;
`

export const Text = styled(P)`
  background: white;
  border-left: 0.3rem solid red;
  color: red;
  display: inline-block;
  padding: 1rem 2rem;
`

Text.Bang = styled(Span)

export default ErrorBoundary
