import React, { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Header from './header.styles'
import {
  useCurrentUserQuery,
  useSignoutMutation
} from '../../graphql/user/hooks'

toast.configure()

const HeaderComponent = () => {
  const { data } = useCurrentUserQuery()
  const [signout, { data: signoutData }] = useSignoutMutation()
  const me = data && data.me

  useEffect(() => {
    if (signoutData) toast(signoutData.signout.message)
  }, [signoutData])

  const toastOptions = {
    draggable: false,
    closeButton: false,
    hideProgressBar: true,
    className: 'toast-container',
    toastClassName: 'toast',
    autoClose: 3000
  }

  return (
    <Header>
      <Header.LogoContainer to="/">
        <Header.Logo name="logo-royal" />
      </Header.LogoContainer>
      <ToastContainer {...toastOptions} />
      <Header.Nav>
        <Header.NavItem>
          <Header.Link to="/">HOME</Header.Link>
        </Header.NavItem>
        <Header.NavItem>
          <Header.Link to="/shop">SHOP</Header.Link>
        </Header.NavItem>
        {me ? (
          <Header.NavItem>
            <Header.SignoutBtn onClick={signout}>SIGNOUT</Header.SignoutBtn>
          </Header.NavItem>
        ) : (
          <Header.NavItem>
            <Header.Link to="/signin">SIGNIN</Header.Link>
          </Header.NavItem>
        )}
        {me && (
          <Header.NavItem>
            <Header.NavIcon name="account-circle" />
          </Header.NavItem>
        )}
      </Header.Nav>
    </Header>
  )
}

export default HeaderComponent
