import React, { useEffect, useRef } from 'react'

import Cart from './cart.styles'
import { useLocalStateQuery, useToggleCartMutation } from '../../graphql/local-state-hooks'

const CartComponent = () => {
  const { data: { cartOpen } } = useLocalStateQuery() // prettier-ignore
  const [toggleCart] = useToggleCartMutation()
  const cartRef = useRef(null)

  const _toggleCart = (e) => {
    if (!cartRef.current.contains(e.target)) {
      toggleCart()
    }
  }

  useEffect(() => {
    if (cartOpen) document.addEventListener('click', _toggleCart)
    return () => document.removeEventListener('click', _toggleCart)
  }, [cartOpen])

  return <Cart cartOpen={cartOpen} ref={cartRef}></Cart>
}

export default CartComponent
