import React from 'react'
import { navigate } from 'gatsby'

import Slide from './slide.styles'
import Icon from '../icons/index'

const Element = ({ tag, to, text, icon }) => {
  const Tag = tag.toLowerCase()
  switch (tag) {
    case 'button':
      return (
        <Slide.ElementWrap>
          <Tag onClick={() => navigate(to)}>{text}</Tag>
        </Slide.ElementWrap>
      )
    case 'input':
      return (
        <Slide.ElementWrap>
          <Icon name={icon} />
          <Tag placeholder={text} />
        </Slide.ElementWrap>
      )
  }
}

const SlideComponent = ({ title, element }) => (
  <Slide>
    <Slide.Content>
      <Slide.Title>{title}</Slide.Title>
      <Element {...element} />
    </Slide.Content>
  </Slide>
)

export default SlideComponent
