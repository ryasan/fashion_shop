import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Product, { Price } from './product.styles'
import { formatPrice } from '../../../utils'
import { Button, Image, Span, Small, Hr as Divider, B } from '../../../elements'

const ProductComponent = ({ product, sizeFilters, addCartItem, me }) => {
  const image = require(`../../../images/products/${product.sku}_1.jpg`)
  const formattedPrice = formatPrice(product.price)
  const dollars = formattedPrice.slice(0, -3)
  const cents = formattedPrice.slice(formattedPrice.length - 3)
  const detailsPage = '/shop/' + product.id

  const handleAddCartItem = () => {
    addCartItem({ variables: { product: product, user: me } })
  }

  product.quantity = 1

  return (
    <Product>
      <Link to={detailsPage} state={{ product: { ...product, image } }}>
        <Product.Image>
          {product.isFreeShipping && (
            <Product.Special>Free shipping</Product.Special>
          )}
          <Image src={image} alt={product.title} />
        </Product.Image>
        <Product.Details>
          <Span>{product.title}</Span>
          <Divider />
          <Price>
            <B>{dollars}</B>
            <Small>{cents}</Small>
          </Price>
        </Product.Details>
      </Link>
      <Product.Button>
        <Button className="buy-btn" onClick={handleAddCartItem}>
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
