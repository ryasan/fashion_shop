import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'

import Slider, { Card } from './slider.styles'
import SlideTimer from './timer'
import DotsComponent from './dots'
import { device } from '../../shared/utils'
import { ItemIntersection } from '../../shared/typings'

const Slide: React.FC<React.ComponentProps<any>> = props => {
  const { item, currentIdx, idx } = props

  const handleClick = () => {
    if (item.onClick) item.onClick()
  }

  return (
    <Slider.ListItem {...props}>
      <Card
        isCenter={idx === currentIdx}
        isLeftInnerCard={idx === currentIdx - 1}
        isRightInnerCard={idx === currentIdx + 1}
        isLeftOuterCard={idx < currentIdx - 1}
        isRightOuterCard={idx > currentIdx + 1}
        onClick={handleClick}
      >
        <Card.Face>
          <Card.Header>
            <Card.HeaderImage src={item.image} />
          </Card.Header>
          <Card.Body>
            {item.bodyContent.map((content: string[], i: number) => (
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
  currentIdx: PropTypes.number,
  idx: PropTypes.number
}

Slide.defaultProps = {
  onClick: () => ({})
}

const distances = [90, 60, 30, 0, -30, -60, -90]
const smallDistances = [-60, -40, -20, 0, 20, 40, 60]

const SliderComponent = ({
  items
}: {
  items: ItemIntersection & {
    bodyContent: Required<Array<string | number>>
    onClick: Required<() => void>
    image: Required<string>
  }
}) => {
  const len = items.length
  const half = Math.floor(len / 2)
  const [currentIdx, setCurrentIdx] = useState(half)

  const [pct, setPct] = useState(0)
  const [isHovering, setIsHovering] = useState<boolean | null>(null)
  const isMobileLg = useMediaQuery({ query: device.mobileL })

  const handlePrevClick = () => {
    setCurrentIdx(prev => (prev + (items.length - 1)) % items.length)
  }

  const handleNextClick = () => {
    setCurrentIdx(prev => (prev + 1) % items.length)
  }

  const handleDotClick = (selectedIdx: number) => {
    setCurrentIdx(selectedIdx)
  }

  const toggleIsHovering = () => {
    setIsHovering((prev: boolean | null) => !prev)
  }

  useEffect(() => {
    let interval: number = setInterval(() => {
      setPct(prev => (prev < 100 ? prev + 25 : 0))
    }, 1000)

    if (isHovering) clearInterval(interval)

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
            translateX={(isMobileLg ? smallDistances : distances)[currentIdx]}
            onMouseEnter={toggleIsHovering}
            onMouseLeave={toggleIsHovering}
          >
            {items.map((item, i) => (
              <Slide key={i} idx={i} item={item} currentIdx={currentIdx} />
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
          currentIdx={currentIdx}
          dotCapacity={len}
          onClick={handleDotClick}
        />
        <SlideTimer pct={pct} />
      </Slider.Container>
    </Slider>
  )
}

export default SliderComponent
