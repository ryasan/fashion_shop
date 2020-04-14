import React from 'react'

import Header from './header.styles'

const HeaderComponent = () => (
  <Header>
    <Header.Logo to="/">
      <Header.Img name="logo-royal" />
    </Header.Logo>
    <Header.Nav>
      <Header.NavItem>
        <Header.Link to="/">HOME</Header.Link>
      </Header.NavItem>
      <Header.NavItem>
        <Header.Link to="/shop">SHOP</Header.Link>
      </Header.NavItem>
    </Header.Nav>
  </Header>
)

export default HeaderComponent
