import React from 'react'

import Cart from './cart'
import LeftArrow from './left-arrow'
import RightArrow from './right-arrow'
import Magnifier from './magnifier'
import Envelope from './envelope'

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
  }
}

export default Icon
