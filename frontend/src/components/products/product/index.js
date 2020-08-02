import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Product from './product.styles'
import { formatPrice, getFrontImage } from '../../../utils'
import { useAddCartItemMutation } from '../../../graphql/cart/hooks'
import { Button, Image, Small, B, Div as Price, Hr as Divider, H3 as Title, A } from '../../../elements'

const ProductComponent = ({ product, sizeFilters }) => {
  const [addCartItem] = useAddCartItemMutation()
  const image = getFrontImage(product.sku)
  const formattedPrice = formatPrice(product.price)
  const dollars = formattedPrice.slice(0, -3)
  const cents = formattedPrice.slice(formattedPrice.length - 3)
  const detailsPage = `/shop/${product.id}/`

  const handleAddCartItem = () => {
    addCartItem({ variables: { product } })
  }

  return (
    <Product>
      {product.isFreeShipping && <Product.Special>Free Shipping</Product.Special>}
      <Link to={detailsPage} state={{ sku: product.sku }}>
        <Product.Header>
          <Image src={image} />
        </Product.Header>
        <Product.Offset />
        <Product.Body>
          <Title>{product.title}</Title>
          <Divider />
          <Price>
            <B>{dollars}</B>
            <Small>{cents}</Small>
          </Price>
        </Product.Body>
      </Link>
      <Product.Footer>
        <Button className='buy-btn' onClick={handleAddCartItem}>
          Add to cart
        </Button>
      </Product.Footer>
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
  }).isRequired
}

export default ProductComponent
