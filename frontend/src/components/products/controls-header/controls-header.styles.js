import styled from 'styled-components'

import ErrorBoundary from '../../error-boundary'
import { P } from '../../elements'

const ControlsHeader = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
  width: 100%;
`

ControlsHeader.ErrorBoundary = ErrorBoundary

ControlsHeader.Count = styled(P)`
  color: var(--off-white);
`

export default ControlsHeader
