import React from 'react'

import CartIcon from './cart'
import LeftArrow from './left-arrow'
import RightArrow from './right-arrow'

const Icon = props => {
  switch (props.name) {
    case 'cart':
      return <CartIcon {...props} />
    case 'left-arrow':
      return <LeftArrow {...props} />
    case 'right-arrow':
      return <RightArrow {...props} />
  }
}

export default Icon
