import React from 'react'
import PropTypes from 'prop-types'

import Product, { Price } from './product.styles'
import { formatPrice } from '../../../utils'
import { useAddCartItemMutation } from '../../../graphql/cart/hooks'
import { Button, Image, Span, Small, Hr, B } from '../../elements'

const ProductComponent = ({ product, sizeFilters }) => {
  const [addCartItem] = useAddCartItemMutation()
  const formattedPrice = formatPrice(product.price)
  const productImage = require(`../../../images/products/${product.sku}_1.jpg`)
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
        <Product.Special>
          Free shipping
        </Product.Special>
      )}
      <Product.Thumb>
        <Image src={productImage} alt={product.title} />
      </Product.Thumb>
      <Product.Details>
        <Span>{product.title}</Span>
        <Hr modifiers="red" />
        <Price>
          <B>{dollars}</B>
          <Small>{cents}</Small>
        </Price>
      </Product.Details>
      <Product.Button>
        <Button
          className="buy-btn"
          modifiers={btnModifiers}
          onClick={handleAddCartItem}>
          Add to cart
        </Button>
      </Product.Button>
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
