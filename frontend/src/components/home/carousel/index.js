import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Carousel, { cardWidth, Scene, Card } from './carousel.styles'
import { useProductsQuery } from '../../../graphql/product/hooks'
import { getFrontImage, formatPrice } from '../../../shared/utils'
import Loader from '../../loader'
import ErrorBoundary from '../../error-boundary/index'

const Slide = props => {
  const { product, centerPos, idx } = props

  return (
    <Scene {...props}>
      <Link to={`/shop/${product.id}/`}>
        <Card
          isCenter={idx === centerPos}
          isPresentedOnLeft={idx === centerPos - 1}
          isPresentedOnRight={idx === centerPos + 1}
          isOnDeckOnTheLeft={idx < centerPos}
          isOnDeckOnTheRight={idx > centerPos}
        >
          <Card.Face>
            <Card.Header>
              <Card.HeaderImage src={getFrontImage(product.sku)} />
            </Card.Header>
            <Card.Body>
              <Card.Text>{product.title}</Card.Text>
              <Card.Text>{formatPrice(product.price)}</Card.Text>
            </Card.Body>
          </Card.Face>
        </Card>
      </Link>
    </Scene>
  )
}

const CarouselComponent = ({ products: productItems }) => {
  const [products, setProducts] = useState(productItems)
  const len = products.length
  const half = Math.floor(len / 2)
  const [{ translateX, centerPos }, setSlideData] = useState({
    translateX: 0,
    centerPos: half
  })

  const handlePrevClick = () => {
    setSlideData(prev => ({
      translateX: centerPos <= 0 ? half * -cardWidth : translateX + cardWidth,
      centerPos: (prev.centerPos + (len - 1)) % len
    }))
  }

  const handleNextClick = () => {
    setSlideData(prev => ({
      translateX: centerPos >= 6 ? half * cardWidth : translateX - cardWidth,
      centerPos: (prev.centerPos + 1) % len
    }))
  }

  const renderSliderList = (offset) => {
    return (
      <Carousel.SliderList translateX={translateX}>
        {products.map((product, i) => (
          <Slide
            key={i}
            idx={i}
            translateX={translateX}
            product={product}
            centerPos={centerPos}
          />
        ))}
      </Carousel.SliderList>
    )
  }

  useEffect(() => {}, [centerPos])

  return (
    <Carousel>
      <h1>Browse our latest stuff.</h1>
      <Carousel.SliderContainer>
        <Carousel.Track>
          <Carousel.Button onClick={handlePrevClick} />
          {renderSliderList()}
          <Carousel.Button onClick={handleNextClick} />
        </Carousel.Track>
      </Carousel.SliderContainer>
    </Carousel>
  )
}

CarouselComponent.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
}

const withCarouselData = Component => props => {
  const { data, loading, error } = useProductsQuery({
    variables: { where: { isFeatured: true } }
  })

  if (loading) {
    return (
      <Carousel>
        <Loader color='white' />
      </Carousel>
    )
  }

  const products = data.products.slice(0, 7)

  return (
    <ErrorBoundary error={error}>
      <Component {...props} products={products} />
    </ErrorBoundary>
  )
}

export default withCarouselData(CarouselComponent)
