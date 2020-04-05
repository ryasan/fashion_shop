import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Carousel from './carousel.styles'
import Slide from './slide'
import mockSlides from '../../mocks/carousel-slides.json'
import Icon from '../icons'

const PrevArrow = ({ onClick }) => (
  <Carousel.Prev onClick={onClick}>
    <Icon name="left-arrow" />
  </Carousel.Prev>
)

const NextArrow = ({ onClick }) => (
  <Carousel.Next onClick={onClick}>
    <Icon name="right-arrow" />
  </Carousel.Next>
)

const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  swipeToSlide: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />
}

const CarouselComponent = ({ className }) => {
  return (
    <Carousel>
      <Slider {...settings}>
        {mockSlides.map((slide, i) => (
          <Slide key={i} {...slide} />
        ))}
      </Slider>
    </Carousel>
  )
}

export default CarouselComponent
