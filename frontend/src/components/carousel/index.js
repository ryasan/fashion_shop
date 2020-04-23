import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Carousel from './carousel.styles'
import Slide from './slide'
import Icon from '../icons'
import slides from './carousel-data'
import { withHoverState } from '../../utils'

const PrevArrow = ({ onClick, isHovering }) => (
  <Carousel.Prev onClick={onClick} isHovering={isHovering}>
    <Icon name="left-arrow" />
  </Carousel.Prev>
)

const NextArrow = ({ onClick, isHovering }) => (
  <Carousel.Next onClick={onClick} isHovering={isHovering}>
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

const CarouselComponent = ({ isHovering, mouseHoverProps }) => (
  <Carousel {...mouseHoverProps}>
    <Carousel.Slider {...settings({ isHovering })}>
      {slides.map((slide, i) => (
        <Slide key={i} {...slide} />
      ))}
    </Carousel.Slider>
  </Carousel>
)

export default withHoverState(CarouselComponent)
