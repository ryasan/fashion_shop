import React from 'react'
import { navigate } from 'gatsby'

import Slide, { Element } from './slide.styles'
import Icon from '../../icons'
import { withHoverState } from '../../../utils'
import { Button, Input } from '../../elements'

const ElementComponent = ({
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
      const [redButton, transparentButton] = modifiers
      return (
        <Element>
          <Element.ButtonInner>
            <Button
              {...mouseHoverProps}
              modifiers={isHovering ? redButton : transparentButton}
              onClick={() => navigate(to)}>
              <Icon name={icon} />
              {text}
            </Button>
          </Element.ButtonInner>
        </Element>
      )
    case 'input':
      return (
        <Element>
          <Element.InputInner>
            <Icon name={icon} />
            <Input modifiers={modifiers} placeholder={text} />
          </Element.InputInner>
        </Element>
      )
    default:
      return null
  }
}

const ElementWithHoverState = withHoverState(ElementComponent)

const SlideComponent = ({ element, image }) => (
  <Slide>
    <Slide.Content image={image}>
      {element && <ElementWithHoverState {...element} />}
    </Slide.Content>
  </Slide>
)

export default SlideComponent
