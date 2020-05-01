import styled from 'styled-components'

import { redButton } from '../elements'

const Account = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
˝`

const Details = styled.div`
  max-width: var(--max-width);
  width: 100%;
  button {
    ${redButton};
    padding: 1rem 2rem;
  }
  p {
    margin-bottom: 2rem;
  }
`

export { Details }
export default Account
