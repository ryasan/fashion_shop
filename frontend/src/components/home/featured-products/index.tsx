import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router'

import FeaturedProducts, { Card } from './featured-products.styles'
import ErrorBoundary from '../../error-boundary'
import Loader from '../../loader'
import { useAddCategoryFilterMutation } from '../../../graphql/filter/hooks'
import { useProductsQuery } from '../../../graphql/product/hooks'
import { getPrimaryImage } from '../../../shared/utils/get-image'
import { ProductInterface } from '../../../shared/typings'

const containerVariants = {
  initial: { opacity: 0 },
  final: { opacity: 1, transition: { duration: 1 } }
}

const imageVariants = {
  initial: { width: 0 },
  final: {
    transition: { duration: 0.5, delay: 0.3 },
    width: 300
  }
}

const Products: React.FC<{
  products: ProductInterface[]
  scrollPct: number
}> = ({ products, scrollPct }) => {
  const [addCategoryFilter, { data, loading }] = useAddCategoryFilterMutation()
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = (category: string) => {
    addCategoryFilter({ variables: { category } })
  }

  useEffect(() => {
    if (data) navigate('/shop/')
  }, [data])

  useEffect(() => {
    if (scrollPct >= 25) setIsVisible(true)
  }, [scrollPct])

  if (loading) return null

  if (products.length < 1) return null

  return (
    <FeaturedProducts>
      {products.map((product, i) => (
        <Card
          key={i}
          variants={containerVariants}
          initial='initial'
          animate='final'
        >
          <Card.Header>
            <Card.CategoryTitle title={product.category.toUpperCase() + 'S'} />
          </Card.Header>
          <Card.CallToAction onClick={() => handleClick(product.category)}>
            VIEW ALL
          </Card.CallToAction>
          <Card.ImageContainer index={i}>
            <Card.Image
              initial='initial'
              animate={isVisible ? 'final' : 'initial'}
              variants={imageVariants}
              src={getPrimaryImage(product.images)}
            />
            <Card.Image
              initial='initial'
              animate={isVisible ? 'final' : 'initial'}
              variants={imageVariants}
              src={getPrimaryImage(product.images)}
            />
          </Card.ImageContainer>
          <Card.ProductTitle>{product.title}</Card.ProductTitle>
        </Card>
      ))}
      <FeaturedProducts.Promo>Questions? 210-547-1212</FeaturedProducts.Promo>
    </FeaturedProducts>
  )
}

const FeaturedProductsComponent: React.FC<{ scrollPct: number }> = ({
  scrollPct
}) => {
  const { data, loading, error } = useProductsQuery({
    variables: {
      where: {
        sku_in: [
          '7add67da-0e1a-42d5-ba3c-bdf72b7be8ba',
          '451209a9-330a-40ff-b95f-b5e3830a07c1'
        ]
      }
    }
  })

  if (loading) {
    return (
      <FeaturedProducts>
        <Loader color='white' />
      </FeaturedProducts>
    )
  }

  if (data.products.length !== 2) return null

  return (
    <ErrorBoundary error={error}>
      <Products scrollPct={scrollPct} products={data.products} />
    </ErrorBoundary>
  )
}

export default FeaturedProductsComponent
