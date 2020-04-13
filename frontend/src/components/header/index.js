import React from 'react'

import Header from './header.styles'
import { useToggleCartMutation } from '../../graphql/local-state-hooks'

const HeaderComponent = () => {
  const [toggleCart] = useToggleCartMutation()

  return (
    <Header>
      <Header.Logo to="/">
        <Header.Img name='logo-royal' />
      </Header.Logo>
      <Header.Nav>
        <Header.NavItem>
          <Header.Link to="/">HOME</Header.Link>
        </Header.NavItem>
        <Header.NavItem>
          <Header.Link to="/shop">SHOP</Header.Link>
        </Header.NavItem>
        <Header.NavItem onClick={toggleCart}>
          <Header.CartBtn name="cart" />
        </Header.NavItem>
      </Header.Nav>
    </Header>
  )
}

export default HeaderComponent
