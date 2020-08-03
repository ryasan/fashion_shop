import styled from 'styled-components'

import { device } from '../../../utils'

const ControlsHeader = styled.div`
  align-items: center;
  background: transparent;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1395px) {
    padding: 0 5rem;
  }

  @media ${device.laptop} {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: center;
    justify-items: center;
  }
`

export default ControlsHeader
