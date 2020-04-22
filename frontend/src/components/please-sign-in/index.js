import React from 'react'
import { navigate } from '@reach/router'

import PleaseSignin from './please-sign-in.styles'
import { useCurrentUserQuery } from '../../graphql/user/hooks'
import { redButton, clearButton } from '../shared'
import { withHoverHOC } from '../../utils'

const PleaseSigninComponent = props => {
  const { data } = useCurrentUserQuery()
  const me = data && data.me

  if (!me) {
    return (
      <PleaseSignin>
        <PleaseSignin.Text modifiers={['whiteColor', 'mediumText']}>
          Please sign in before continuing
        </PleaseSignin.Text>
        <PleaseSignin.Btn
          {...props.handleHover()}
          onClick={() => navigate('/signin')}
          modifiers={props.isHovering ? clearButton : redButton}>
          Signin
        </PleaseSignin.Btn>
      </PleaseSignin>
    )
  }

  return props.children
}

export default withHoverHOC(PleaseSigninComponent)
