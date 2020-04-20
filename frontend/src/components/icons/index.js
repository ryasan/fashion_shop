import React from 'react'

import Cart from './cart'
import LeftArrow from './left-arrow'
import RightArrow from './right-arrow'
import Magnifier from './magnifier'
import Envelope from './envelope'
import LogoRoyal from './logo-royal'
import LogoJersey from './logo-jersey'
import LogoDiamond from './logo-diamond'
import ShoppingBag from './shopping-bag'
import Close from './close'
import Account from './account'
import Key from './key'

const Icon = props => {
  switch (props.name) {
    case 'account-circle':
    case 'account-box':
      return <Account {...props} />
    case 'cart':
      return <Cart {...props} />
    case 'left-arrow':
      return <LeftArrow {...props} />
    case 'right-arrow':
      return <RightArrow {...props} />
    case 'magnifier':
      return <Magnifier {...props} />
    case 'envelope':
      return <Envelope {...props} />
    case 'logo-royal':
      return <LogoRoyal {...props} />
    case 'logo-jersey':
      return <LogoJersey {...props} />
    case 'logo-diamond':
      return <LogoDiamond {...props} />
    case 'shopping-bag':
      return <ShoppingBag {...props} />
    case 'close':
      return <Close {...props} />
    case 'key':
      return <Key />
  }
}

export default Icon
