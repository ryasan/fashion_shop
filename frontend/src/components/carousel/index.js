import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Carousel, { PrevButton, NextButton } from './carousel.styles'
import Slide from './slide'
import Icon from '../icons'
import slides from './carousel-data'
import { withHoverState } from '../../utils'

const PrevArrow = ({ onClick, isHovering }) => (
  <PrevButton onClick={onClick} isHovering={isHovering}>
    <Icon name="left-arrow" />
  </PrevButton>
)

const NextArrow = ({ onClick, isHovering }) => (
  <NextButton onClick={onClick} isHovering={isHovering}>
    <Icon name="right-arrow" />
  </NextButton>
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
