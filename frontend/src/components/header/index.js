import React, { useEffect } from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { Link } from 'gatsby'

import Header from './header.styles'
import useAuth from '../auth'
import Cart from '../cart'
import Icon from '../icons'
import { A } from '../../elements'
import { useCurrentUserQuery } from '../../graphql/user/hooks'
import { toast } from '../toast'
import { useCartQuery, useUploadCartMutation } from '../../graphql/cart/hooks'
import { cartInitialState } from '../../graphql/cart/reducer'
import { SIGNOUT } from '../signin/form-types'

const HeaderComponent = () => {
  const client = useApolloClient()
  const { data: cartData } = useCartQuery()
  const { data: userData } = useCurrentUserQuery()
  const [signout, { data: signoutData }] = useAuth()
  const [uploadCart] = useUploadCartMutation()
  const me = userData && userData.me

  const handleSignout = () => {
    signout({
      variables: { authType: SIGNOUT }
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
      <Header.LogoContainer to="/">
        <Icon name="logo-royal" />
      </Header.LogoContainer>
      <Header.Nav>
        <Header.NavItem>
          <Link to="/">
            <Icon name="home" />
            HOME
          </Link>
        </Header.NavItem>
        <Header.NavItem>
          <Link to="/shop/">
            <Icon name="store" />
            SHOP
          </Link>
        </Header.NavItem>
        {me && (
          <Header.NavItem>
            <A onClick={handleSignout}>
              <Icon name="exit" />
              SIGNOUT
            </A>
          </Header.NavItem>
        )}
        {!me && (
          <Header.NavItem>
            <Link to="/signin/">
              <Icon name="key" />
              SIGNIN
            </Link>
          </Header.NavItem>
        )}
        {me && (
          <Header.NavItem>
            <Link to="/account/">
              <Icon name="account-circle" />
              ACCOUNT
            </Link>
          </Header.NavItem>
        )}
      </Header.Nav>
      <Cart />
    </Header>
  )
}

export default HeaderComponent
