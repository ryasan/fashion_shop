import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Hero from './hero.styles'
import { device } from '../../../shared/utils'

const createLeftAnimation = (height: number[], x: number[]) => ({
  animate: { height, x, rotateX: [180, 180, 0, 0, 0] },
  transition: {
    duration: 1.5,
    delay: 0.5,
    ease: 'easeInOut'
  }
})

const createRightAnimation = (height: number[], x: number[]) => ({
  animate: { height, x, rotateX: [180, 180, 0, 0, 0] },
  transition: {
    duration: 1.5,
    delay: 0.5,
    ease: 'easeInOut'
  }
})

const HeroComponent = () => {
  const isMobileLg = useMediaQuery({ query: device.mobileL })

  const leftAnimation = isMobileLg
    ? createLeftAnimation([0, 48, 48, 48, 48], [0, 0, 0, 0, -48])
    : createLeftAnimation([0, 120, 120, 120], [0, 0, 0, -120])

  const rightAnimation = isMobileLg
    ? createRightAnimation([0, 48, 48, 48, 48], [0, 0, 0, 0, 48])
    : createRightAnimation([0, 120, 120, 120, 120], [0, 0, 0, 0, 120])

  return (
    <Hero>
      <Hero.TextContainer>
        <Hero.TitleLeft {...leftAnimation}>
          E <Hero.Ampersand modifiers='red_color'>&</Hero.Ampersand> S
        </Hero.TitleLeft>{' '}
        <Hero.TitleRight {...rightAnimation}>Streetwear</Hero.TitleRight>
      </Hero.TextContainer>
    </Hero>
  )
}

export default HeroComponent
