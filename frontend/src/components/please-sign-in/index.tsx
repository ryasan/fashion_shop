import React from 'react'
import { navigate } from '@reach/router'

import PleaseSignin from './please-sign-in.styles'
import { useCurrentUserQuery } from '../../graphql/user/hooks'

const PleaseSigninComponent = ({ children }: { children: any }) => {
  const { data } = useCurrentUserQuery()
  const me = data && data.me

  if (!me) {
    return (
      <PleaseSignin>
        <PleaseSignin.Text modifiers={['white_color', 'font_size_lg']}>
          Please sign in before continuing
        </PleaseSignin.Text>
        <PleaseSignin.Button onClick={() => navigate('/signin/')}>
          Signin
        </PleaseSignin.Button>
      </PleaseSignin>
    )
  }

  if (children) return children
  return null
}

export default PleaseSigninComponent
