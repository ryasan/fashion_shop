import styled from 'styled-components'

import ErrorBoundary from '../../error-boundary'
import { P } from '../../elements'

const ControlsHeader = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`

ControlsHeader.ErrorBoundary = ErrorBoundary

ControlsHeader.Count = styled(P)`
  flex: 1;
  text-align: center;
`

export default ControlsHeader
