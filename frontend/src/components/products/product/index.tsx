import React from 'react'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'

import Product, { Promo, Header, Body, Footer } from './product.styles'
import { formatPrice, withImages } from '../../../shared/utils'
import { ImagesInterface, ItemIntersection } from '../../../shared/typings'

const ProductComponent = ({
  item,
  images
}: {
  item: ItemIntersection
  images?: ImagesInterface
}) => {
  const formattedPrice: string = formatPrice(item.price)
  const dollars: string = formattedPrice.slice(0, -3)
  const cents: string = formattedPrice.slice(formattedPrice.length - 3)
  const detailsPage: string = `/shop/${item.id}/`

  const handleAddCartItem = (): void => {
    navigate(detailsPage)
  }

  return (
    <Product>
      {item.isFreeShipping && <Promo>Free Shipping</Promo>}
      <Link to={detailsPage} state={{ sku: item.sku }}>
        <Header>
          <Header.Image src={images?.bigImage} />
        </Header>
        <Product.Offset />
        <Body>
          <Body.Title>{item.title}</Body.Title>
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
