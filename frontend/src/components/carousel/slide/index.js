import React from 'react'
import { navigate } from 'gatsby'

import Slide, { Element } from './slide.styles'
import Icon from '../../icons'
import { Button, Input } from '../../elements'

const ElementComponent = ({ tag, to, text, icon }) => {
  switch (tag) {
    case 'button':
      return (
        <Element>
          <Element.ButtonInner>
            <Button onClick={() => navigate(to)}>
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
            <Input placeholder={text} />
          </Element.InputInner>
        </Element>
      )
    default:
      return null
  }
}

const SlideComponent = ({ element, image }) => (
  <Slide>
    <Slide.Content image={image}>
      {element && <ElementComponent {...element} />}
    </Slide.Content>
  </Slide>
)

export default SlideComponent
