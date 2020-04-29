import React from 'react'
import { navigate } from '@reach/router'

import PleaseSignin from './please-sign-in.styles'
import { useCurrentUserQuery } from '../../graphql/user/hooks'
import { P, Button } from '../../elements'
import { withHoverState } from '../../utils'

const PleaseSigninComponent = ({ children }) => {
  const { data } = useCurrentUserQuery()
  const me = data && data.me

  if (!me) {
    return (
      <PleaseSignin>
        <P modifiers={['white_color', 'font_size_m']}>
          Please sign in before continuing
        </P>
        <Button onClick={() => navigate('/signin')}>Signin</Button>
      </PleaseSignin>
    )
  }

  return children
}

export default withHoverState(PleaseSigninComponent)
