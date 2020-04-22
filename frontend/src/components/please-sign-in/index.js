import React, { useState } from 'react'
import { navigate } from '@reach/router'

import PleaseSignin from './please-sign-in.styles'
import { useCurrentUserQuery } from '../../graphql/user/hooks'

const PleaseSigninComponent = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false)
  const { data } = useCurrentUserQuery()
  const me = data && data.me
  const btnModifiers = [
    isHovering ? 'transparent' : 'red',
    isHovering ? 'redColor' : 'whiteColor',
    'redBorder',
    'mediumText',
    'redOutline'
  ]
  const textModifiers = ['whiteColor', 'mediumText']

  if (!me) {
    return (
      <PleaseSignin>
        <PleaseSignin.Text modifiers={textModifiers}>
          Please sign in before continuing
        </PleaseSignin.Text>
        <PleaseSignin.Btn
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => navigate('/signin')}
          modifiers={btnModifiers}>
          Signin
        </PleaseSignin.Btn>
      </PleaseSignin>
    )
  }

  return children
}

export default PleaseSigninComponent
