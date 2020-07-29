import React from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import CartCount from './cart-count.styles'

const CartCountComponent = ({ children }) => {
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

CartCountComponent.propTypes = {
  children: PropTypes.number.isRequired
}

export default CartCountComponent
