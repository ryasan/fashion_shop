import React from 'react'
import { navigate } from '@reach/router'

import PleaseSignin from './please-sign-in.styles'
import { useCurrentUserQuery } from '../../graphql/user/hooks'
import { redButton, clearButton, P, Button } from '../elements'
import { withHoverState } from '../../utils'

const PleaseSigninComponent = ({ isHovering, mouseHoverProps, children }) => {
  const { data } = useCurrentUserQuery()
  const me = data && data.me

  if (!me) {
    return (
      <PleaseSignin>
        <P modifiers={['whiteColor', 'mediumText']}>
          Please sign in before continuing
        </P>
        <Button
          {...mouseHoverProps}
          onClick={() => navigate('/signin')}
          modifiers={isHovering ? clearButton : redButton}>
          Signin
        </Button>
      </PleaseSignin>
    )
  }

  return children
}

export default withHoverState(PleaseSigninComponent)
