import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Slider, { cardWidth, Card } from './slider.styles'
import SlideTimer from './timer'
import DotsComponent from './dots'
import ErrorBoundary from '../../error-boundary'
import Loader from '../../loader'
import { useProductsQuery } from '../../../graphql/product/hooks'
import { getFrontImage, formatPrice } from '../../../shared/utils'

const Slide = props => {
  const { product, centerPos, idx } = props

  return (
    <Slider.ListItem {...props}>
      <Link to={`/shop/${product.id}/`}>
        <Card
          isCenter={idx === centerPos}
          isLeftInnerCard={idx === centerPos - 1}
          isRightInnerCard={idx === centerPos + 1}
          isLeftOuterCard={idx < centerPos - 1}
          isRightOuterCard={idx > centerPos + 1}
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
    </Slider.ListItem>
  )
}

const SliderComponent = ({ products }) => {
  const len = products.length
  const half = Math.floor(len / 2)
  const [{ translateX, centerPos }, setSlideData] = useState({
    translateX: 0,
    centerPos: half
  })
  const [pct, setPct] = useState(0)
  const [intervalPct, setIntervalPct] = useState(null)

  const handlePrevClick = () => {
    setSlideData(({ centerPos, translateX }) => ({
      translateX: centerPos <= 0 ? half * -cardWidth : translateX + cardWidth,
      centerPos: (centerPos + (len - 1)) % len
    }))
  }

  const handleNextClick = () => {
    setSlideData(({ centerPos, translateX }) => ({
      translateX: centerPos >= 6 ? half * cardWidth : translateX - cardWidth,
      centerPos: (centerPos + 1) % len
    }))
  }

  const handleDotClick = selectedIdx => {
    if (selectedIdx < centerPos) {
      setSlideData(({ centerPos: curCenter, translateX }) => ({
        centerPos: selectedIdx,
        translateX: translateX + (centerPos - selectedIdx) * cardWidth
      }))
    } else if (selectedIdx > centerPos) {
      setSlideData(({ centerPos: curCenter, translateX }) => ({
        centerPos: selectedIdx,
        translateX: translateX + (centerPos - selectedIdx) * cardWidth
      }))
    }
  }

  const increasePct = () => {
    setPct(prev => (prev < 100 ? prev + 25 : 0))
  }

  const startAutoSlide = () => {
    const interval = setInterval(increasePct, 1000)
    setIntervalPct(interval)
  }

  const stopAutoSlide = () => {
    clearInterval(intervalPct)
    setIntervalPct(null)
  }

  useEffect(() => {
    startAutoSlide()
    return () => stopAutoSlide()
  }, [])

  useEffect(() => {
    if (pct === 100) handleNextClick()
  }, [pct])

  return (
    <Slider>
      <Slider.Title>Browse our latest threads.</Slider.Title>
      <Slider.Container>
        <Slider.Track>
          <Slider.Button onClick={handlePrevClick}>&#8592;</Slider.Button>
          <Slider.List
            translateX={translateX}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            {products.map((product, i) => (
              <Slide key={i} idx={i} product={product} centerPos={centerPos} />
            ))}
          </Slider.List>
          <Slider.Button onClick={handleNextClick}>&#8594;</Slider.Button>
        </Slider.Track>
        <DotsComponent
          centerPos={centerPos}
          numberOfDots={len}
          onClick={handleDotClick}
        />
        <SlideTimer pct={pct} />
      </Slider.Container>
    </Slider>
  )
}

SliderComponent.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
}

const withSlideData = Component => props => {
  const { data, loading, error } = useProductsQuery({
    variables: { where: { isFeatured: true } }
  })

  if (loading) {
    return (
      <Slider>
        <Loader color='white' />
      </Slider>
    )
  }

  const products = data.products.slice(0, 7)

  return (
    <ErrorBoundary error={error}>
      <Component {...props} products={products} />
    </ErrorBoundary>
  )
}

export default withSlideData(SliderComponent)
