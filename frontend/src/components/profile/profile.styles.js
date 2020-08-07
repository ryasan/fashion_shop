import styled from 'styled-components'

import { P, Button } from '../../shared/elements'
import { btns } from '../../shared/styles'

const Profile = styled.div`
  flex-grow: 1;
  position: relative;
`

Profile.Text = styled(P)`
  margin-bottom: 2rem;
`

Profile.DelBtn = styled(Button)`
  ${btns.red};
  padding: 1rem 2rem;
`

export default Profile
