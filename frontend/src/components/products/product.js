import React from 'react'

import Product from './product.styles'
import PropTypes from 'prop-types'
import { formatPrice } from '../../utils'
import { useAddCartItemMutation } from '../../graphql/local-state-hooks'

const ProductComponent = ({ product }) => {
  product.quantity = 1
  const [addCartItem] = useAddCartItemMutation()
  const formattedPrice = formatPrice(product.price)

  return (
    <Product>
      {product.isFreeShipping && (
        <Product.Special modifiers={['red', 'whiteColor', 'superSmallText']}>
          Free shipping
        </Product.Special>
      )}
      <Product.Thumb>
        <Product.Img
          src={require(`../../images/products/${product.sku}_1.jpg`)}
          alt={product.title}
        />
      </Product.Thumb>
      <Product.Details>
        <Product.Divider modifiers="red" />
        <Product.Title>{product.title}</Product.Title>
        <Product.Price>
          <Product.B>${formattedPrice.slice(0, -3)}</Product.B>
          <Product.Small>
            {formattedPrice.slice(formattedPrice.length - 3)}
          </Product.Small>
        </Product.Price>
      </Product.Details>
      <Product.BuyBtn
        className="buy-btn"
        modifiers={['red', 'whiteColor', 'redBorder', 'mediumText']}
        onClick={() => addCartItem({ variables: { product } })}>
        Add to cart
      </Product.BuyBtn>
    </Product>
  )
}

Product.ProductComponent = {
  product: PropTypes.object.isRequired,
  isFreeShipping: PropTypes.bool.isRequired
}

export default ProductComponent
