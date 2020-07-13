import styled from 'styled-components'

import { device } from '../../../utils'

const ControlsHeader = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.laptop} {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: center;
    justify-items: center;
    grid-gap: 1.5rem;
  }
`

export default ControlsHeader
