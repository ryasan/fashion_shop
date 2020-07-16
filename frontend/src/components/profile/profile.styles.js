import styled from 'styled-components'

import { redButton } from '../../elements'

const Profile = styled.div`
  position: relative;
  flex-grow: 1;
  button {
    ${redButton};
    padding: 1rem 2rem;
  }
  p {
    margin-bottom: 2rem;
  }
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

export default Profile
