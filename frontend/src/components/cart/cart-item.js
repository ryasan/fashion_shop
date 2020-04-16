import React from 'react'
import PropTypes from 'prop-types'

import CartItem from './cart-item.styles'
import { useRemoveCartItemMutation } from '../../graphql/local-state-hooks'

const CartItemComponent = ({ product }) => {
  const [removeCartItem] = useRemoveCartItemMutation()

  const handleRemoveCartItem = () => {
    removeCartItem({ variables: { id: product.id } })
  }

  return (
    <CartItem>
      <CartItem.Thumb
        src={require(`../../images/products/${product.sku}_2.jpg`)}
      />
      <CartItem.Details>
        <CartItem.P>{product.title}</CartItem.P>
        <CartItem.P modifiers={['grayColor', 'smallText']}>
          {`${product.availableSizes.join(' | ')} | ${product.style}`}
          <br />
          Quantity:{' '}
          <CartItem.Qty modifiers="offWhiteColor">
            {product.quantity}
          </CartItem.Qty>
        </CartItem.P>
      </CartItem.Details>
      <CartItem.Price>
        <CartItem.Delete onClick={handleRemoveCartItem} className="del-btn">
          <CartItem.Icon name="close" />
        </CartItem.Delete>
        <CartItem.P modifiers={['mediumText', 'redColor']}>
          {product.currencyFormat} {product.price}
        </CartItem.P>
      </CartItem.Price>
    </CartItem>
  )
}

CartItemComponent.propTypes = {
  product: PropTypes.object.isRequired
}

export default CartItemComponent
