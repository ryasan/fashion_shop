import React from 'react'
import { navigate } from '@reach/router'

import ProductSlider from './product-slider.styles'
import Slider from '../../slider'
import Loader from '../../loader'
import ErrorBoundary from '../../error-boundary'
import { useProductsQuery } from '../../../graphql/product/hooks'
import { formatPrice } from '../../../shared/utils'
import { getPrimaryImage } from '../../../shared/utils/get-image'
import { ProductInterface } from '../../../shared/typings'

const ProductSliderComponent: React.FC = () => {
  const { data, loading, error } = useProductsQuery({
    variables: { where: { isFeatured: true } }
  })

  if (loading) {
    return (
      <ProductSlider>
        <Loader color='white' />
      </ProductSlider>
    )
  }

  const products = data.products.slice(0, 7)
  const slideItems = products.map((item: ProductInterface) => ({
    ...item,
    onClick: () => navigate(`/shop/${item.id}/`),
    image: getPrimaryImage(item.images),
    bodyContent: [item.title, formatPrice(item.price)]
  }))

  return (
    <ProductSlider>
      <ErrorBoundary error={error}>
        <ProductSlider.Title>Browser our latest threads.</ProductSlider.Title>
        <ProductSlider.HugeTextLeft>STYLE</ProductSlider.HugeTextLeft>
        <ProductSlider.HugeTextRight>IDEA</ProductSlider.HugeTextRight>
        <Slider items={slideItems} />
      </ErrorBoundary>
    </ProductSlider>
  )
}

export default ProductSliderComponent
