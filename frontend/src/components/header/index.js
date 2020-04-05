import React from 'react'

import Header from './header.styles'

const HeaderComponent = () => (
  <Header>
    <Header.Item>
      <Header.Link to="/">HOME</Header.Link>
    </Header.Item>
    <Header.Item>
      <Header.Link to="/shop">SHOP</Header.Link>
    </Header.Item>
    <Header.Item>
      <Header.CartBtn />
    </Header.Item>
  </Header>
)

export default HeaderComponent
