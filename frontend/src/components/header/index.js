import React, { useEffect } from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'
import { cartInitialState } from '../../graphql/cart/reducer'

import Header from './header.styles'
import Icon from '../icons'
import { A } from '../../elements'
import {
  useCurrentUserQuery,
  useSignoutMutation
} from '../../graphql/user/hooks'
import { toast } from '../toast'

const HeaderComponent = () => {
  const { data: userData } = useCurrentUserQuery()
  const [signout, { data: signoutData }] = useSignoutMutation()
  const client = useApolloClient()
  const me = userData && userData.me

  useEffect(() => {
    if (signoutData) toast(signoutData.signout.message)
  }, [signoutData])

  const handleSignout = () => {
    signout()
    client.writeData({ data: cartInitialState })
  }

  const goToAccountPage = () => {
    navigate('/account')
  }

  return (
    <Header>
      <Header.LogoContainer to="/">
        <Icon name="logo-royal" />
      </Header.LogoContainer>
      <Header.Nav>
        <Header.NavItem>
          <Link to="/">HOME</Link>
        </Header.NavItem>
        <Header.NavItem>
          <Link to="/shop">SHOP</Link>
        </Header.NavItem>
        {me && (
          <Header.NavItem>
            <A onClick={handleSignout}>SIGNOUT</A>
          </Header.NavItem>
        )}
        {!me && (
          <Header.NavItem>
            <Link to="/signin">SIGNIN</Link>
          </Header.NavItem>
        )}
        {me && (
          <Header.NavItem>
            <Icon name="account-circle" onClick={goToAccountPage} />
          </Header.NavItem>
        )}
      </Header.Nav>
    </Header>
  )
}

export default HeaderComponent
