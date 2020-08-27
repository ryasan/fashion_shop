import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import CartCount from './cart-count.styles'

const CartCountComponent: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <CartCount.AnimationStyles>
      <TransitionGroup>
        <CSSTransition
          unmountOnExit
          className='count'
          classNames='count'
          key={children}
          timeout={{ enter: 500, exit: 500 }}
        >
          <CartCount>{children}</CartCount>
        </CSSTransition>
      </TransitionGroup>
    </CartCount.AnimationStyles>
  )
}

export default CartCountComponent
