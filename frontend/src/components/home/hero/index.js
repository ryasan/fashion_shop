import React from 'react'

import Hero from './hero.styles'
import { Span } from '../../../shared/elements'

const leftAnimation = {
  animate: {
    height: [0, 120, 120, 120],
    x: [0, 0, 0, -150]
  },
  transition: {
    duration: 1,
    delay: 1,
    ease: 'easeInOut'
  }
}

const rightAnimation = {
  animate: {
    height: [0, 120, 120, 120],
    x: [0, 0, 0, 150]
  },
  transition: {
    duration: 1,
    delay: 1,
    ease: 'easeInOut'
  }
}

const HeroComponent = () => {
  return (
    <Hero>
      <Hero.TextContainer>
        <Hero.TitleLeft {...leftAnimation}>
          E <Span modifiers='red_color'>&</Span> S
        </Hero.TitleLeft>{' '}
        <Hero.TitleRight {...rightAnimation}>Streetwear</Hero.TitleRight>
      </Hero.TextContainer>
    </Hero>
  )
}

/* <Hero.Subtitle>
Keeping people dressed <br /> comfortably 365 days a year.
</Hero.Subtitle> */

export default HeroComponent
