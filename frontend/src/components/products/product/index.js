import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'

import Product, { Promo, Header, Body, Footer } from './product.styles'
import { formatPrice, getFrontImage } from '../../../shared/utils'

const ProductComponent = ({ product, sizeFilters }) => {
  const image = getFrontImage(product.sku)
  const formattedPrice = formatPrice(product.price)
  const dollars = formattedPrice.slice(0, -3)
  const cents = formattedPrice.slice(formattedPrice.length - 3)
  const detailsPage = `/shop/${product.id}/`

  const handleAddCartItem = () => {
    navigate(detailsPage)
  }

  return (
    <Product>
      {product.isFreeShipping && <Promo>Free Shipping</Promo>}
      <Link to={detailsPage} state={{ sku: product.sku }}>
        <Header>
          <Header.Image src={image} />
        </Header>
        <Product.Offset />
        <Body>
          <Body.Title>{product.title}</Body.Title>
          <Body.Divider />
          <Body.Price>
            <Body.Dollars>{dollars}</Body.Dollars>
            <Body.Cents>{cents}</Body.Cents>
          </Body.Price>
        </Body>
      </Link>
      <Footer>
        <Footer.Button onClick={handleAddCartItem} />
      </Footer>
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
