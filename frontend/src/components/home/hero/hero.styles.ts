import styled from 'styled-components'
import { motion } from 'framer-motion'

import heroBg from '../../../static/hero-bg-1.svg'
import { H4, Span } from '../../../shared/elements'
import { device } from '../../../shared/utils'

export const Hero = styled.div`
  align-items: center;
  background: url(${heroBg}) center center/cover no-repeat;
  background-color: white;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  box-shadow: var(--box-shadow-lg);
  display: flex;
  height: calc(100vh - 10rem);
  justify-content: center;
  position: relative;
  width: 100%;
`

Hero.TextContainer = styled.div`
  color: white;
  padding: 5rem;
  text-align: center;
  transform: translate(0, -13rem);
`

Hero.Title = styled(motion.h1)`
  font-size: 10rem;
  font-weight: 400;
  margin: 0;
  overflow: hidden;
  position: relative;
  text-align: left;

  @media ${device.mobileL} {
    font-size: 5rem;
  }
`

Hero.TitleLeft = Hero.Title

Hero.TitleRight = Hero.Title

Hero.Ampersand = Span

Hero.Subtitle = styled(H4)`
  color: var(--red);
  float: right;
  font-weight: 400;
  margin-bottom: 0.5rem;
  margin-top: 0;
  text-align: right;
  width: 50%;
`

export default Hero
