import React from 'react'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'

import Product, { Promo, Header, Body, Footer } from './product.styles'
import { formatPrice, withImages } from '../../../shared/utils'
import { ImagesInterface, ProductInterface } from '../../../shared/interfaces'

interface ProductComponentInterface {
  product: ProductInterface
  images: ImagesInterface
}

const ProductComponent: React.FC<ProductComponentInterface> = ({
  product,
  images
}) => {
  const formattedPrice: string = formatPrice(product.price)
  const dollars: string = formattedPrice.slice(0, -3)
  const cents: string = formattedPrice.slice(formattedPrice.length - 3)
  const detailsPage: string = `/shop/${product.id}/`

  const handleAddCartItem = (): void => {
    navigate(detailsPage)
  }

  return (
    <Product>
      {product.isFreeShipping && <Promo>Free Shipping</Promo>}
      <Link to={detailsPage} state={{ sku: product.sku }}>
        <Header>
          <Header.Image src={images.bigImage} />
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

export default withImages(ProductComponent)
