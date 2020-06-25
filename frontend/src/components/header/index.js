import React, { useEffect } from 'react'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'

import Header from './header.styles'
import Icon from '../icons'
import useAuth from '../auth'
import { A } from '../../elements'
import { useCurrentUserQuery } from '../../graphql/user/hooks'
import { toast } from '../toast'

const HeaderComponent = () => {
  const { data: userData } = useCurrentUserQuery()
  const [{ doSignout }, { data: signoutData }] = useAuth()
  const me = userData && userData.me

  useEffect(() => {
    if (signoutData) toast(signoutData.signout.message)
  }, [signoutData])

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
            <A onClick={doSignout}>SIGNOUT</A>
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
