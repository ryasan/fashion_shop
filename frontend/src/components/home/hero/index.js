import React from 'react'

import Hero from './hero.styles'
import { Span } from '../../../shared/elements'

const HeroComponent = () => {
  return (
    <Hero>
      <Hero.Diagonal />
      <Hero.TextContainer>
        <Hero.Title>
          E <Span modifiers='red_color'>&</Span> S Streetwear
        </Hero.Title>
        <Hero.Subtitle>
          Keeping people dressed <br /> comfortably 365 days a year.
        </Hero.Subtitle>
      </Hero.TextContainer>
    </Hero>
  )
}

export default HeroComponent
