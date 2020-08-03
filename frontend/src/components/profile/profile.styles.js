import styled from 'styled-components'

import { redButton } from '../../elements'

const Profile = styled.div`
  flex-grow: 1;
  position: relative;

  button {
    ${redButton};
    padding: 1rem 2rem;
  }

  p {
    margin-bottom: 2rem;
  }

  div {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

export default Profile
