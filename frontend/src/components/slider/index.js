import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'

import Slider, { Card } from './slider.styles'
import SlideTimer from './timer'
import DotsComponent from './dots'
import { device } from '../../shared/utils'

const Slide = props => {
  const { item, centerPos, idx } = props

  const handleClick = () => {
    if (item.onClick) item.onClick()
  }

  return (
    <Slider.ListItem {...props}>
      <Card
        isCenter={idx === centerPos}
        isLeftInnerCard={idx === centerPos - 1}
        isRightInnerCard={idx === centerPos + 1}
        isLeftOuterCard={idx < centerPos - 1}
        isRightOuterCard={idx > centerPos + 1}
        onClick={handleClick}
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
    </Slider.ListItem>
  )
}

Slide.propTypes = {
  item: PropTypes.object,
  centerPos: PropTypes.number,
  idx: PropTypes.number
}

Slide.defaultProps = {
  onClick: () => ({})
}

const SliderComponent = ({ items, title }) => {
  const len = items.length
  const half = Math.floor(len / 2)
  const [{ translateX, centerPos }, setSlideData] = useState({
    translateX: 0,
    centerPos: half
  })

  const [pct, setPct] = useState(0)
  const [isHovering, setIsHovering] = useState(null)
  const isMobileLg = useMediaQuery({ query: device.mobileL })
  const cardWidth = isMobileLg ? 20 : 30

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

  const toggleIsHovering = () => {
    setIsHovering(prev => !prev)
  }

  useEffect(() => {
    let interval

    if (!isHovering) {
      interval = setInterval(() => {
        setPct(prev => {
          return prev < 100 ? prev + 25 : 0
        })
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isHovering])

  useEffect(() => {
    if (pct === 100) handleNextClick()
  }, [pct])

  return (
    <Slider>
      <Slider.Container>
        <Slider.Track>
          <Slider.Button
            onClick={handlePrevClick}
            onMouseEnter={toggleIsHovering}
            onMouseLeave={toggleIsHovering}
          >
            &#8592;
          </Slider.Button>
          <Slider.List
            translateX={translateX}
            onMouseEnter={toggleIsHovering}
            onMouseLeave={toggleIsHovering}
          >
            {items.map((item, i) => (
              <Slide key={i} idx={i} item={item} centerPos={centerPos} />
            ))}
          </Slider.List>
          <Slider.Button
            onClick={handleNextClick}
            onMouseEnter={toggleIsHovering}
            onMouseLeave={toggleIsHovering}
          >
            &#8594;
          </Slider.Button>
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
