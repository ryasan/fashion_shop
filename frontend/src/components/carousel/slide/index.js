import React from 'react'
import { navigate } from 'gatsby'

import Slide from './slide.styles'
import { withHoverState } from '../../../utils'

const Element = ({
  tag,
  to,
  text,
  icon,
  mouseHoverProps,
  isHovering,
  modifiers
}) => {
  switch (tag) {
    case 'button':
      const [redButton, clearButton] = modifiers
      return (
        <Slide.ElementWrap>
          <Slide.ElementButtonInner>
            <Slide.Button
              {...mouseHoverProps}
              modifiers={isHovering ? redButton : clearButton}
              onClick={() => navigate(to)}>
              <Slide.Icon name={icon} />
              {text}
            </Slide.Button>
          </Slide.ElementButtonInner>
        </Slide.ElementWrap>
      )
    case 'input':
      return (
        <Slide.ElementWrap>
          <Slide.ElementInputInner>
            <Slide.Icon name={icon} />
            <Slide.Input modifiers={modifiers} placeholder={text} />
          </Slide.ElementInputInner>
        </Slide.ElementWrap>
      )
    default:
      return null
  }
}

const ElementWithHoverState = withHoverState(Element)

const SlideComponent = ({ element, image }) => (
  <Slide>
    <Slide.Content image={image}>
      {element && <ElementWithHoverState {...element} />}
    </Slide.Content>
  </Slide>
)

export default SlideComponent
