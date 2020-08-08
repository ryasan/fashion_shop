import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router'

import FeaturedProducts, {
  Card,
  InnerContainer,
  SkullSvg,
  NinjaSvg
} from './featured-products.styles'
import { getFrontImage, getBackImg } from '../../../shared/utils'
import { useAddCategoryFilterMutation } from '../../../graphql/filter/hooks'

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } }
}

const imageVariants = {
  hidden: { width: 0 },
  show: {
    transition: { duration: 1, type: 'spring' },
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
    if (pct >= 15) setIsVisible(true)
  }, [pct])

  if (loading) return null

  return (
    <FeaturedProducts>
      <InnerContainer>
        {products.map((product, i) => (
          <Card
            key={i}
            variants={containerVariants}
            initial='hidden'
            animate='show'
          >
            <Card.Header>
              <Card.Title>{product.category.toUpperCase()}</Card.Title>
            </Card.Header>
            <Card.CallToAction onClick={() => handleClick(product.category)}>
              VIEW ALL
            </Card.CallToAction>
            <Card.ImageContainer index={i}>
              <Card.Image
                initial='hidden'
                animate={isVisible ? 'show' : 'hidden'}
                variants={imageVariants}
                src={getFrontImage(product.sku)}
              />
              <Card.Image
                initial='hidden'
                animate={isVisible ? 'show' : 'hidden'}
                variants={imageVariants}
                src={getBackImg(product.sku)}
              />
            </Card.ImageContainer>
            {i === 0 ? (
              <SkullSvg name='skull-text' />
            ) : (
              <NinjaSvg name='ninja-text' />
            )}
          </Card>
        ))}
      </InnerContainer>
    </FeaturedProducts>
  )
}

export default FeaturedProductsComponent
