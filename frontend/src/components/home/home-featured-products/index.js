import React, { useEffect } from 'react'
import { navigate } from '@reach/router'

import FeaturedProducts, { Card } from './home-featured-products.styles'
import { NinjaText, SkullText } from '../../../images'
import { H3 } from '../../../elements'
import { getFrontImage, getBackImg } from '../../../utils'
import { useAddCategoryFilterMutation } from '../../../graphql/filter/hooks'
import { HOODIE, SHIRT } from '../../../types/category-types'

const containerVariants = {
  hidden: { opacity: 0, y: -300 },
  show: {
    opacity: 1,
    transition: { duration: 1, type: 'spring', when: 'beforeChildren' },
    y: 0
  }
}

const imageVariants = {
  hidden: { width: 0 },
  show: {
    transition: { duration: 2, type: 'spring' },
    width: 250
  }
}

const FeaturedProductsComponent = ({ products }) => {
  const [featureA, featureB] = products
  const [addCategoryFilter, { data }] = useAddCategoryFilterMutation()

  const handleClick = category => {
    addCategoryFilter({ variables: { category } })
  }

  useEffect(() => {
    if (data) navigate('/shop')
  }, [data])

  return (
    <FeaturedProducts
      variants={containerVariants}
      initial='hidden'
      animate='show'
    >
      <FeaturedProducts.Inner>
        <Card>
          <Card.Header>
            <H3>HOODIES</H3>
          </Card.Header>
          <Card.CallToAction onClick={() => handleClick(HOODIE)}>
            VIEW ALL
          </Card.CallToAction>
          <Card.ImageContainer>
            <Card.Image
              variants={imageVariants}
              image={getFrontImage(featureA.sku)}
            />
            <Card.Image
              variants={imageVariants}
              image={getBackImg(featureA.sku)}
            />
            <SkullText position='top-left' />
          </Card.ImageContainer>
        </Card>
        <Card>
          <Card.Header>
            <H3>CREW</H3>
          </Card.Header>
          <Card.CallToAction onClick={() => handleClick(SHIRT)}>
            VIEW ALL
          </Card.CallToAction>
          <Card.ImageContainer bottomRight>
            <Card.Image
              variants={imageVariants}
              image={getBackImg(featureB.sku)}
            />
            <Card.Image
              variants={imageVariants}
              image={getFrontImage(featureB.sku)}
            />
            <NinjaText />
          </Card.ImageContainer>
        </Card>
      </FeaturedProducts.Inner>
    </FeaturedProducts>
  )
}

export default FeaturedProductsComponent
