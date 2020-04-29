import styled from 'styled-components'

import { redButton } from '../../elements'

const PleaseSignin = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  button {
    padding: 1rem 2rem;
    ${redButton}
  }
`

export default PleaseSignin
