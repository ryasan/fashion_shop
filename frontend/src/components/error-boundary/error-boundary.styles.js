import styled from 'styled-components'

import { Span, P } from '../../shared/elements'

const ErrorBoundary = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`

export const Text = styled(P)`
  background: white;
  border-left: 0.3rem solid red;
  color: red;
  display: inline-block;
  padding: 1rem 2rem;
`

Text.Addon = Span

export default ErrorBoundary
