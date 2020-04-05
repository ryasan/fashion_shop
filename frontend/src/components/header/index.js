import React from 'react'

import Header from './header.styles'
import { useToggleCartMutation } from '../../graphql/local-state-hooks'

const HeaderComponent = () => {
  const [toggleCart] = useToggleCartMutation()

  return (
    <Header>
      <Header.Item>
        <Header.Link to="/">HOME</Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link to="/shop">SHOP</Header.Link>
      </Header.Item>
      <Header.Item onClick={toggleCart}>
        <Header.CartBtn name="cart" />
      </Header.Item>
    </Header>
  )
}

export default HeaderComponent
