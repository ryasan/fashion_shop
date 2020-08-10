import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Slider, { cardWidth, Card } from './slider.styles'
import SlideTimer from './timer'
import DotsComponent from './dots'

const Slide = props => {
  const { item, centerPos, idx } = props

  return (
    <Slider.ListItem {...props}>
      <Link to={item.link}>
        <Card
          isCenter={idx === centerPos}
          isLeftInnerCard={idx === centerPos - 1}
          isRightInnerCard={idx === centerPos + 1}
          isLeftOuterCard={idx < centerPos - 1}
          isRightOuterCard={idx > centerPos + 1}
        >
          <Card.Face>
            <Card.Header>
              <Card.HeaderImage src={item.image} />
            </Card.Header>
            <Card.Body>
              {item.bodyContent.map((content, i) => (
                <Card.Text key={i}>{content}</Card.Text>
              ))}
            </Card.Body>
          </Card.Face>
        </Card>
      </Link>
    </Slider.ListItem>
  )
}

const SliderComponent = ({ items }) => {
  const len = items.length
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
      <Slider.Container>
        <Slider.Track>
          <Slider.Button onClick={handlePrevClick}>&#8592;</Slider.Button>
          <Slider.List
            translateX={translateX}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            {items.map((item, i) => (
              <Slide key={i} idx={i} item={item} centerPos={centerPos} />
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      image: PropTypes.string.isRequired,
      bodyContent: PropTypes.arrayOf(PropTypes.string)
    })
  )
}

export default SliderComponent
