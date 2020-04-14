import React from 'react'
import { navigate } from 'gatsby'

import Slide from './slide.styles'

const Element = ({ tag, to, text, icon }) => {
  const Tag = tag.toLowerCase()
  switch (tag) {
    case 'button':
      return (
        <Slide.ElementWrap>
          <Slide.ElementButtonInner>
            <Tag onClick={() => navigate(to)}>
              <Slide.Icon name={icon} />
              {text}
            </Tag>
          </Slide.ElementButtonInner>
        </Slide.ElementWrap>
      )
    case 'input':
      return (
        <Slide.ElementWrap>
          <Slide.ElementInputInner>
            <Slide.Icon name={icon} />
            <Tag placeholder={text} />
          </Slide.ElementInputInner>
        </Slide.ElementWrap>
      )
  }
}

const SlideComponent = ({ element, image }) => (
  <Slide>
    <Slide.Content image={image}>
      {element && <Element {...element} />}
    </Slide.Content>
  </Slide>
)

export default SlideComponent
