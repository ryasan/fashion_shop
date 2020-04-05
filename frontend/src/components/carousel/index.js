import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Carousel from './carousel.styles'
import Slide from './slide'
import mockSlides from '../../mocks/carousel-slides.json'
import Icon from '../icons'

const PrevArrow = ({ onClick, showArrows }) => (
  <Carousel.Prev onClick={onClick} showArrows={showArrows}>
    <Icon name="left-arrow" />
  </Carousel.Prev>
)

const NextArrow = ({ onClick, showArrows }) => (
  <Carousel.Next onClick={onClick} showArrows={showArrows}>
    <Icon name="right-arrow" />
  </Carousel.Next>
)

const settings = props => ({
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  swipeToSlide: true,
  prevArrow: <PrevArrow {...props} />,
  nextArrow: <NextArrow {...props} />
})

const CarouselComponent = () => {
  const [showArrows, setShowArrows] = useState(false)

  return (
    <Carousel
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}>
      <Carousel.Slider {...settings({ showArrows })}>
        {mockSlides.map((slide, i) => (
          <Slide key={i} {...slide} />
        ))}
      </Carousel.Slider>
    </Carousel>
  )
}

export default CarouselComponent
