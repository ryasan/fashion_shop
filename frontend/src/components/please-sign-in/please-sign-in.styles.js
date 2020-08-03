import styled from 'styled-components'

import { redButton } from '../../elements'

const PleaseSignin = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 10rem;
  justify-content: space-around;
  
  button {
    padding: 1rem 2rem;
    ${redButton}
  }
`

export default PleaseSignin
