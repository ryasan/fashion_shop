import React from 'react'

import Product from './product.styles'
import PropTypes from 'prop-types'
import { formatPrice } from '../../../utils'
import { useAddCartItemMutation } from '../../../graphql/cart/hooks'

const ProductComponent = ({ product, sizeFilters }) => {
  const [addCartItem] = useAddCartItemMutation()
  const formattedPrice = formatPrice(product.price)
  const productImage = require(`../../../images/products/${product.sku}_1.jpg`)
  const specialModifiers = ['red', 'whiteColor', 'smallText']
  const btnModifiers = ['red', 'whiteColor', 'redBorder', 'mediumText']
  const dollars = formattedPrice.slice(0, -3)
  const cents = formattedPrice.slice(formattedPrice.length - 3)
  const handleAddCartItem = () => {
    addCartItem({ variables: { product } })
  }

  product.quantity = 1

  return (
    <Product>
      {product.isFreeShipping && (
        <Product.Special modifiers={specialModifiers}>
          Free shipping
        </Product.Special>
      )}
      <Product.Thumb>
        <Product.Image src={productImage} alt={product.title} />
        <Product.Title>{product.title}</Product.Title>
      </Product.Thumb>
      <Product.Details>
        <Product.Divider modifiers="red" />
        <Product.Price>
          <Product.Dollars>{dollars}</Product.Dollars>
          <Product.Cents>{cents}</Product.Cents>
        </Product.Price>
      </Product.Details>
      <Product.BuyBtn
        className="buy-btn"
        modifiers={btnModifiers}
        onClick={handleAddCartItem}>
        Add to cart
      </Product.BuyBtn>
    </Product>
  )
}

Product.ProductComponent = {
  product: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isFreeShipping: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    sku: PropTypes.number.isRequired,
    style: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired,
    availableSizes: PropTypes.array.isRequired
  })
}

export default ProductComponent
