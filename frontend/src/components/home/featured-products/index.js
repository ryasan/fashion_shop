import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router'

import FeaturedProducts, {
  Card,
  InnerContainer
} from './featured-products.styles'
import { getFrontImage, getBackImg } from '../../../shared/utils'
import { useAddCategoryFilterMutation } from '../../../graphql/filter/hooks'

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

const FeaturedProductsComponent = ({ products, pct }) => {
  const [addCategoryFilter, { data, loading }] = useAddCategoryFilterMutation()
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = category => {
    addCategoryFilter({ variables: { category } })
  }

  useEffect(() => {
    if (data) navigate('/shop/')
  }, [data])

  useEffect(() => {
    if (pct >= 30) setIsVisible(true)
  }, [pct])

  if (loading) return null

  const [firstFeature, secondFeature] = products

  return (
    <FeaturedProducts>
      <InnerContainer>
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
      </InnerContainer>
    </FeaturedProducts>
  )
}

export default FeaturedProductsComponent
