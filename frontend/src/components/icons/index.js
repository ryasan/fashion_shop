import React from 'react'

import Cart from './cart'
import LeftArrow from './left-arrow'
import RightArrow from './right-arrow'
import Magnifier from './magnifier'
import Envelope from './envelope'
import LogoRoyal from './logo-royal'
import LogoJersey from './logo-jersey'
import LogoDiamond from './logo-diamond'

const Icon = props => {
  switch (props.name) {
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
  }
}

export default Icon
