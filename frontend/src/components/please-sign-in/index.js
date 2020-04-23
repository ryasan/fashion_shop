import React from 'react'
import { navigate } from '@reach/router'

import PleaseSignin from './please-sign-in.styles'
import { useCurrentUserQuery } from '../../graphql/user/hooks'
import { redButton, clearButton } from '../elements'
import { withHoverState } from '../../utils'

const PleaseSigninComponent = ({ isHovering, mouseHoverProps, children }) => {
  const { data } = useCurrentUserQuery()
  const me = data && data.me

  if (!me) {
    return (
      <PleaseSignin>
        <PleaseSignin.Text modifiers={['whiteColor', 'mediumText']}>
          Please sign in before continuing
        </PleaseSignin.Text>
        <PleaseSignin.Btn
          {...mouseHoverProps}
          onClick={() => navigate('/signin')}
          modifiers={isHovering ? clearButton : redButton}>
          Signin
        </PleaseSignin.Btn>
      </PleaseSignin>
    )
  }

  return children
}

export default withHoverState(PleaseSigninComponent)
