import styled from 'styled-components'

import { device } from '../../../shared/utils'

const Filter = styled.div`
  position: relative;
  z-index: 200;

  @media ${device.laptop} {
    left: 1rem;
    position: fixed;
  }
`

export default Filter
