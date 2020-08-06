import React, { useEffect, useRef } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useApolloClient } from '@apollo/react-hooks'

import Header from './header.styles'
import useAuth from '../auth'
import Cart from '../cart'
import Icon from '../icons'
import Loader from '../loader'
import Search from '../search'
import { A } from '../../shared/elements'
import { useCurrentUserQuery } from '../../graphql/user/hooks'
import { toast } from '../toast'
import { useCartQuery, useUploadCartMutation } from '../../graphql/cart/hooks'
import { cartInitialState } from '../../graphql/cart/reducer'
import { SIGNOUT } from '../../types/auth-form-types'

const HeaderComponent = props => {
  const client = useApolloClient()
  const { data: cartData } = useCartQuery()
  const { data: userData } = useCurrentUserQuery()
  const [signout, { data: signoutData, loading }] = useAuth()
  const [uploadCart] = useUploadCartMutation()
  const navRef = useRef(null)
  const me = userData && userData.me

  const handleSignout = () => {
    signout({
      variables: { authMethod: SIGNOUT }
    })
    uploadCart({
      variables: {
        data: cartData.cartItems.map(c => ({
          productId: c.product.id,
          quantity: c.quantity
        }))
      }
    })
    client.writeData({ data: cartInitialState })
  }

  useEffect(() => {
    if (signoutData) toast(signoutData.signout.message)
  }, [signoutData])

  return (
    <Header>
      <Header.LogoContainer to='/'>
        <Icon name='logo-royal' />
      </Header.LogoContainer>
      <Search />
      <Header.NavList ref={navRef} me={me}>
        {loading ? (
          <Loader size='small' />
        ) : (
          <>
            <Header.NavItem>
              <AniLink swipe direction='up' to='/'>
                <Icon name='home' />
                HOME
              </AniLink>
            </Header.NavItem>
            <Header.NavItem>
              <AniLink paintDrip to='/shop/'>
                <Icon name='store' />
                SHOP
              </AniLink>
            </Header.NavItem>
            {me && (
              <Header.NavItem>
                <A onClick={handleSignout}>
                  <Icon name='exit' />
                  SIGNOUT
                </A>
              </Header.NavItem>
            )}
            {!me && (
              <Header.NavItem>
                <AniLink sswipe top='entry' to='/signin/'>
                  <Icon name='key' />
                  SIGNIN
                </AniLink>
              </Header.NavItem>
            )}
            {me && (
              <Header.NavItem>
                <AniLink swipe top='exit' to='/account/'>
                  <Icon name='account-circle' />
                  ACCOUNT
                </AniLink>
              </Header.NavItem>
            )}
          </>
        )}
      </Header.NavList>
      <Cart />
    </Header>
  )
}

export default HeaderComponent
