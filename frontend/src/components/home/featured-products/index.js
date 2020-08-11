import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'

import FeaturedProducts, { Card } from './featured-products.styles'
import ErrorBoundary from '../../error-boundary'
import Loader from '../../loader'
import { getFrontImage, getBackImg } from '../../../shared/utils'
import { useAddCategoryFilterMutation } from '../../../graphql/filter/hooks'
import { useProductsQuery } from '../../../graphql/product/hooks'

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

const Products = ({ products, scrollPct }) => {
  const [addCategoryFilter, { data, loading }] = useAddCategoryFilterMutation()
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = category => {
    addCategoryFilter({ variables: { category } })
  }

  useEffect(() => {
    if (data) navigate('/shop/')
  }, [data])

  useEffect(() => {
    if (scrollPct >= 25) setIsVisible(true)
  }, [scrollPct])

  if (loading) return null

  const [firstFeature, secondFeature] = products

  return (
    <FeaturedProducts>
      {[firstFeature, secondFeature].map((product, i) => (
        <Card
          key={i}
          variants={containerVariants}
          initial='initial'
          animate='final'
        >
          <Card.Header>
            <Card.CategoryTitle
              isEvenElement={i % 2 === 0}
              title={product.category.toUpperCase() + 'S'}
            >
              {product.category.toUpperCase()}
            </Card.CategoryTitle>
          </Card.Header>
          <Card.CallToAction onClick={() => handleClick(product.category)}>
            VIEW ALL
          </Card.CallToAction>
          <Card.ImageContainer index={i}>
            <Card.Image
              initial='initial'
              animate={isVisible ? 'final' : 'initial'}
              variants={imageVariants}
              src={getFrontImage(product.sku)}
            />
            <Card.Image
              initial='initial'
              animate={isVisible ? 'final' : 'initial'}
              variants={imageVariants}
              src={getBackImg(product.sku)}
            />
          </Card.ImageContainer>
          <Card.ProductTitle>{product.title}</Card.ProductTitle>
        </Card>
      ))}
      <FeaturedProducts.Promo>Questions? 210-547-1212</FeaturedProducts.Promo>
    </FeaturedProducts>
  )
}

const FeaturedProductsComponent = props => {
  const { data, loading, error } = useProductsQuery({
    variables: { where: { sku_in: ['hoodie_7_front5', 'T_7_front5'] } }
  })

  if (loading) {
    return (
      <FeaturedProducts>
        <Loader color='white' />
      </FeaturedProducts>
    )
  }

  return (
    <ErrorBoundary error={error}>
      <Products scrollPct={props.scrollPct} products={data.products} />
    </ErrorBoundary>
  )
}

FeaturedProductsComponent.propTypes = {
  scrollPct: PropTypes.number.isRequired
}

export default FeaturedProductsComponent
