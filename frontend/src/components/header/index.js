import React, { useEffect } from 'react'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'
import { useApolloClient } from '@apollo/react-hooks'

import Header from './header.styles'
import Icon from '../icons'
import useAuth from '../auth'
import { A } from '../../elements'
import { useCurrentUserQuery } from '../../graphql/user/hooks'
import { toast } from '../toast'
import {
  useCartQuery,
  useUploadCart
} from '../../graphql/cart/hooks'
import { cartInitialState } from '../../graphql/cart/reducer'

const HeaderComponent = () => {
  const client = useApolloClient()
  const { data: cartData } = useCartQuery()
  const { data: userData } = useCurrentUserQuery()
  const [{ doSignout }, { data: signoutData }] = useAuth()
  const [uploadCart] = useUploadCart()
  const me = userData && userData.me

  useEffect(() => {
    if (signoutData) toast(signoutData.signout.message)
  }, [signoutData])

  const goToAccountPage = () => {
    navigate('/account')
  }

  const handleSignout = () => {
    doSignout()
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
