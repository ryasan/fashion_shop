import React from 'react'

import Slide from './slide.styles'

const SlideComponent = ({ title, image }) => {
  return (
    <Slide bg={image}>
      <Slide.Title>{title}</Slide.Title>
    </Slide>
  )
}

export default SlideComponent
