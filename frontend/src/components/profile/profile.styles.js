import styled from 'styled-components'

import { redButton, P, Button } from '../../elements'

const Profile = styled.div`
  flex-grow: 1;
  position: relative;
`

Profile.Text = styled(P)`
  margin-bottom: 2rem;
`

Profile.DelBtn = styled(Button)`
  ${redButton};
  border-radius: 0.2rem;
  padding: 1rem 2rem;
`

export default Profile
