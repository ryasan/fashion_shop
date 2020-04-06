import React from 'react'
import { navigate } from 'gatsby'

import Slide from './slide.styles'
import Icon from '../icons/index'

const Element = ({ element }) => {
  switch (element.tag) {
    case 'button':
      return (
        <Slide.ElementWrap>
          <element.tag onClick={() => navigate(element.to)}>
            {element.text}
          </element.tag>
        </Slide.ElementWrap>
      )
    case 'input':
      return (
        <Slide.ElementWrap>
          <Icon name={element.icon} />
          <element.tag placeholder={element.text} />
        </Slide.ElementWrap>
      )
  }
}

const SlideComponent = ({ title, image, element }) => (
  <Slide bg={image}>
    <Slide.Content>
      <Slide.Title>{title}</Slide.Title>
      <Element element={element} />
    </Slide.Content>
  </Slide>
)

export default SlideComponent
